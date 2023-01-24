import dotenv from "dotenv";
dotenv.config();

import "./lib/mongoose.js";

import express from "express";
import photoRoutes from "./routes/photo.js";
import albumRoutes from "./routes/album.js"
import photographerRoutes from "./routes/photographer.js"
const app = express();

const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`listening on port ${port}`));


import logMiddleware from "./middlewares/log.js";
app.use(logMiddleware);

app.use(express.json());

app.use("/photos",  photoRoutes);
app.use("/albums",  albumRoutes);
app.use("/photographer",  photographerRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const statusCode = error.statusCode || 500;
    res.status(statusCode).send(error.message);
});
