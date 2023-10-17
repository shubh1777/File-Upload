import express from 'express';
import { uploadImage, downloadImage} from '../controller/image_controller.js';
import upload from '../utills/upload.js';
const router= express.Router();

router.post('/upload',upload.single('file'),uploadImage)
router.get('/file/:fileId',downloadImage);

export default router;