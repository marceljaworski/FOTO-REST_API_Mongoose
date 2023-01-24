import { Router } from "express";
import * as albums from "../controllers/album.js";
import validate from "../middlewares/validate.js";
import { postSchema, getSchema, getAllSchema, deleteSchema } from "./album.schema.js";

const albumRoutes = Router();

albumRoutes.post("/", validate(postSchema), albums.create);
albumRoutes.get("/", validate(getAllSchema), albums.getAll);
albumRoutes.get("/:albumId", validate(getSchema), albums.getOne);
albumRoutes.put("/:albumId", albums.replace);
albumRoutes.patch("/:albumId", albums.update);
albumRoutes.delete("/:albumId", validate(deleteSchema), albums.deleteOne);

export default albumRoutes;