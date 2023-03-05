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
server.use(
    cors(/**{
      credentials: true,
      origin: "http://localhost:5173",
    }*/)
);
  

import logMiddleware from "./middlewares/log.js";
server.use(logMiddleware);


server.use("/api/photos",  photoRouter);
server.use("/api/albums",  albumRouter);
server.use("/api/photographer",  photographerRouter);

// With res.sendFile we can deliver files. To do this, we set up an endpoint with a method and path as usual.
// res.sendFile is then given an absolute path (we need __dirname for this) that points to the file.
// So the client calls the endpoint and gets the specified file back.
// server.get("/files/photos/:filename", (req, res) => {
//     res.sendFile(__dirname + `/files/photos/${req.params.filename}`);
// });

// To deliver the frontend via the backend, we only need the following two lines.
// The first line makes all(!) files available in one directory with express.static (similar to res.sendFile).
// Example: GET /static/js/main.abcd1234.js returns the file ./files/frontend/static/js/main.abcd1234.js.
// If a page (see React Router) is requested in the frontend, the second line ensures that the request always ends up at index.html.
// -------------------------
server.use("/", express.static("uploads"));
server.use("/", express.static("./dist"));
server.get("/*", (req, res) => res.sendFile(__dirname + "/dist/index.html"));
// -------------------------


// server.use((req, res) => {
//     res.status(404).send("Page not found :(")
// })

server.use((error, req, res, next) => {
    console.error("ohhh an error!!", error);
    res.status(500).end();
});

server.listen(port, () => console.log(`Server is running on port ${port}`));