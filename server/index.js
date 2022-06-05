import express from 'express';
import bodyParser  from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import blogRoutes from './routes/blogs.js';


// Initialize the express application
const app = express();

// Database Connection for Mongoose
const PORT =  5000;
mongoose.connect('mongodb://localhost:27017/blog_app', { useNewUrlParser: true,useUniFiedTopology: true })
        .then( () => app.listen( PORT, () => console.log(`Server is running on port ${PORT}`)))
        .catch(err => console.log(err));


// Configure the application to use body-parser
app.use(bodyParser.json({limit: '50mb',extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb',extended: true}));
app.use(cors());


// Start Routes
app.use('/blogs', blogRoutes);

