import express from 'express';
import BlogController from './blog.controller.js';
import {validateBody,validateParam} from '../../shared/middlwear/validateBody.js';
import { createBlogSchema } from './schema/create-blog.validator.js';
import { updateBlogSchema } from './schema/update-blog.validator.js';
import { ObjectId } from './schema/id-validator.js';


const router = express.Router();

// Create a blog
router.post('/', validateBody(createBlogSchema), BlogController.createBlog);

// Get all blogs
router.get('/', BlogController.getAllBlogs);

// Get a single blog by ID
router.get('/:id',validateParam(ObjectId), BlogController.getBlogById);

// Update a blog by ID
router.put('/:id',validateParam(ObjectId),validateBody(updateBlogSchema), BlogController.updateBlog);

// Delete a blog by ID
router.delete('/:id',validateParam(ObjectId), BlogController.deleteBlog);

export default router;
