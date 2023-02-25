import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
mongoose.set('strictQuery', false);

mongoose.connect(
    process.env.MONGODB_URI,
    {
        // If we have not stored the database name in the connection string, we can pass a name via the options.
        // Since we already have this separation in the environment, the name has been passed separately in this example.

        dbName: process.env.DATABASE,
    }
);

mongoose.connection.on("error", error => console.error(error));
mongoose.connection.on("connection", () => console.log("connected via mongoose"));
