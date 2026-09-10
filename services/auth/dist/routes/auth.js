import express from "express";
import { loignUser, registerUser } from "../controllers/auth.js";
import uploadFile from "../middleware/multer.js";
const router = express.Router();
router.post("/register", uploadFile, registerUser);
router.post("/login", loignUser);
export default router;
