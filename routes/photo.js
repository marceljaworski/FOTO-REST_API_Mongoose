import { Router } from "express";
import * as photos from "../controllers/photo.js";
import validate from "../middlewares/validate.js";
import { postSchema, getSchema, deleteSchema } from "./photo.schema.js";

const photoRoutes = Router();

photoRoutes.post("/", validate(postSchema), photos.create);
photoRoutes.get("/", photos.getAll);
photoRoutes.get("/:photoId", validate(getSchema), photos.getOne);
photoRoutes.put("/:photoId", photos.replace);
photoRoutes.patch("/:photoId", photos.update);
photoRoutes.delete("/:photoId", validate(deleteSchema), photos.deleteOne);

export default photoRoutes;