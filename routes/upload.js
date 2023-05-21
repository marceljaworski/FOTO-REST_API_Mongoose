import { Router } from "express";
import * as image from "../controllers/image.js";
// import validate from "../middlewares/validate.js";
// import { postSchema, getSchema, getAllSchema, deleteSchema } from "./photo.schema.js";

const photoRoutes = Router();

photoRoutes.post("/", image.create);
photoRoutes.get("/", image.getAll);
// photoRoutes.get("/:photoId", validate(getSchema), photos.getOne);
// photoRoutes.put("/:photoId", photos.replace);
// photoRoutes.patch("/:photoId", photos.update);
// photoRoutes.delete("/:photoId", validate(deleteSchema), photos.deleteOne);

export default photoRoutes;