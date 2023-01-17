import { Router } from "express";
import * as photos from "../controllers/photo.js"

const photoRoutes = Router();

photoRoutes.post("/", photos.create);
photoRoutes.get("/", photos.getAll);
photoRoutes.get("/:photoId", photos.getOne)
photoRoutes.put("/:photoId", photos.replace)
photoRoutes.patch("/:photoId", photos.update)
photoRoutes.delete("/:photoId", photos.deleteOne)

export default photoRoutes;