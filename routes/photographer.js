import { Router } from "express";
import * as photographer from "../controllers/photographer.js";


const photographerRoutes = Router();

photographerRoutes.post("/", photographer.create);
photographerRoutes.get("/", photographer.getAll);
photographerRoutes.get("/:photoId", photographer.getOne);
photographerRoutes.put("/:photoId", photographer.replace);
photographerRoutes.patch("/:photoId", photographer.update);
photographerRoutes.delete("/:photoId", photographer.deleteOne);

export default photographerRoutes;