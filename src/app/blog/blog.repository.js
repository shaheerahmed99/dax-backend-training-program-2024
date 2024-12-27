import Blog from './Blog.model.js';

class BlogRepository {
  static async create(data) {
    const blog = new Blog(data);
    return await blog.save();
  }

  static async findAll() {
    return await Blog.find();
  }

  static async findById(id) {
    return await Blog.findById(id);
  }

  static async updateById(id, data) {
    return await Blog.findByIdAndUpdate(
      id,
      { ...data, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
  }

  static async deleteById(id) {
    return await Blog.findByIdAndDelete(id);
  }
}

export default BlogRepository;
