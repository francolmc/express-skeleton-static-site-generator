import { Router, Request, Response } from "express";
import matter from 'gray-matter';
import md from 'markdown-it';
import path from 'path';
import { Post } from "../types/post";

const routes: Router = Router();

routes.get('/blog/:article', (req: Request, res: Response) => {
    const file = matter.read(path.join(__dirname, `../blog/${req.params.article}.md`));
    const content = file.content;
    const result = md().render(content);
    const post: Post = {
        post: result,
        title: file.data.title,
        description: file.data.description,
        image: file.data.image,
        publishDate: new Date()
    };
    res.render("index", post);
});

export default routes;