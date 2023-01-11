import { Router } from "express";
import * as controller from "."

const router = Router();

router
    .get("/")
    .get("/:photoId")
    .post("/")
    .put("/:photoId")
    .delete("/:deleteId")

export default router;