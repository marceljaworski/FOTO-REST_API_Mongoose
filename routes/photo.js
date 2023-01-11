import { Router } from "express";
import * as photos from "../controllers/photo.js"

const router = Router();

router.post("/", photos.create);
router.get("/", photos.getAll);
router.get("/:photoId", photos.getOne)
router.put("/:photoId", photos.replace)
router.delete("/:deleteId", photos.deleteOne)

export default router;