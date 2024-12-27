import z from 'zod';

const updateBlogSchema = z.object({
    title: z.string().min(1, "Title is required").optional(),
    content: z.string().min(1, "Content is required").optional(),
    author: z.string().min(1, "Author is required").optional(),
});

export { updateBlogSchema };