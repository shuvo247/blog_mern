import blogModels from '../models/blogModels.js';
export const getBlog = async (req,res) => {
    try {
        const Blog = await blogModels.find();
        res.status(200).json(Blog);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
    
}

export const createBlog = async (req,res) => {

    const {title, message, author, tags, thumbnail} = req.body;
    const blog = new blogModels({
        title,
        message,
        author,
        tags,
        thumbnail
    });

    try {
        const newBlog = await blog.save();
        res.status(200).json(newBlog);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}
