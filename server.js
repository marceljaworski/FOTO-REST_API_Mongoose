// read Datei .env variables and add process.env 
import dotenv from "dotenv";
dotenv.config();
// In the server.js we do not need direct access to a database connection.
// It is enough for us if the connection to MongoDB is only established.
// Therefore we import our suitable module and thus ensure that the module is evaluated/executed.
import "./lib/mongoose.js";

import express from "express";
import cors from "cors";

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import photoRouter from "./routes/photo.js";
import albumRouter from "./routes/album.js"
import photographerRouter from "./routes/photographer.js"

const server = express();
const port = process.env.PORT || 3000;
server.use(express.json());

import logMiddleware from "./middlewares/log.js";
server.use(logMiddleware);


server.use("/api/photos",  photoRouter);
server.use("/api/albums",  albumRouter);
server.use("/api/photographer",  photographerRouter);

// Mit res.sendFile können wir Dateien ausliefern. Hierzu richten wir wie gewohnt einen Endpoint mit Methode und Path ein.
// res.sendFile bekommt dann einen absoluten Pfad übergeben (wir benötigen hierzu __dirname), der auf die Datei zeigt.
// Der Client ruft also den Endpoint auf und erhält die angegebene Datei zurück.
// server.get("/files/photos/:filename", (req, res) => {
//     res.sendFile(__dirname + `/files/photos/${req.params.filename}`);
// });

// Um das Frontend über das Backend auszuliefern, benötigen wir nur die folgenden zwei Zeilen.
// Die erste Zeile stellt mit express.static alle(!) Dateien in einem Verzeichnis zur Verfügung (ähnlich res.sendFile).
// Beispiel: GET /static/js/main.abcd1234.js liefert die Datei ./files/frontend/static/js/main.abcd1234.js zurück.
// Wird eine Seite (siehe React Router) im Frontend angefragt, sorgt die zweite Zeile dafür, dass die Anfrage immer auf index.html landet.
// -------------------------
server.use("/", express.static("uploads"));
app.use("/", express.static("./dist"));
server.get("/*", (req, res) => res.sendFile(__dirname + "/dist/index.html"));
// -------------------------


server.use((req, res) => {
    res.status(404).send("Page not found :(")
})

server.use((error, req, res, next) => {
    console.error("Something go wrong", error);
    res.status(500).end();
});

server.listen(port, () => console.log(`Server is running on port ${port}`));