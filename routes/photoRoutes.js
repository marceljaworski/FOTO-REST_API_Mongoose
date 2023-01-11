import { Router } from "express";
import * as photos from "../controllers/photo.js"

const router = Router();

router
    .post("/", photos.create)
    .get("/", photos.getAll)
    // .get("/:photoId", photos.getOne)
    // .put("/:photoId", photos.replace)
    // .delete("/:deleteId", photos.delete)

export default router;