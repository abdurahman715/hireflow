"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cloudinary_1 = __importDefault(require("cloudinary"));
const router = express_1.default.Router();
router.post("/upload", async (req, res) => {
    try {
        const { buffer, public_id } = req.body;
        if (public_id) {
            await cloudinary_1.default.v2.uploader.destroy(public_id);
        }
        const cloud = await cloudinary_1.default.v2.uploader.upload(buffer);
        res.json({
            url: cloud.secure_url,
            public_id: cloud.public_id,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});
exports.default = router;
