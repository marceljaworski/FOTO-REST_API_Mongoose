import { Router } from "express";
import * as albums from "../controllers/album.js"

const albumRoutes = Router();

albumRoutes.post("/", albums.create);
albumRoutes.get("/", albums.getAll);
albumRoutes.get("/:albumId", albums.getOne)
albumRoutes.put("/:albumId", albums.replace)
albumRoutes.patch("/:albumId", albums.update)
albumRoutes.delete("/:albumId", albums.deleteOne)

export default albumRoutes;