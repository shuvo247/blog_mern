import express from 'express';
import { getBlog, createBlog } from '../controllers/blogs.js';

const router = express.Router();

router.get('/', getBlog);
router.post('/',createBlog );

export default router;