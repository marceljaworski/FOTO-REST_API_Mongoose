import dotenv from "dotenv";
dotenv.config();

import "./lib/mongoose.js";

import express from "express";
import photoRoutes from "./routes/photo.js";
import albumRoutes from "./routes/album.js"
const app = express();

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on port ${port}`));


import logMiddleware from "./middlewares/log.js";
app.use(logMiddleware);

app.use(express.json());

app.use("/photos",  photoRoutes);
app.use("/albums",  albumRoutes);

app.use((err, req, res, next) => {
    console.log(err);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).send(err.message);
});
