
import BlogRepository from './blog.repository.js'

class BlogService {
    static async createBlog(data) {
        try {
            return await BlogRepository.create(data);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getAllBlogs() {
        try {
            return await BlogRepository.findAll();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getBlogById(id) {
        try {
            const blog = await BlogRepository.findById(id);
            if (!blog) throw new Error('Blog not found');
            return blog;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async updateBlog(id, data) {
        try {
            const updatedBlog = await BlogRepository.updateById(id,data);
            if (!updatedBlog) throw new Error('Blog not found');
            return updatedBlog;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async deleteBlog(id) {
        try {
            const deletedBlog = await BlogRepository.deleteById(id);
            if (!deletedBlog) throw new Error('Blog not found');
            return deletedBlog;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default BlogService;
