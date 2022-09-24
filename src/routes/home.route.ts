import { Router, Request, Response } from "express";
import path from 'path';
import fs from 'fs';

const routes: Router = Router();

routes.get('/', (req: Request, res: Response) => {
    const posts = fs.readdirSync(path.join(__dirname, '../blog')).filter(file => file.endsWith('.md'));
    res.render("blog", {
        posts
    });
});

export default routes;