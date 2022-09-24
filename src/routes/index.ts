import { Router } from "express";
import HomeRoute from './home.route';
import PostRoute from './post.route';

const routes: Router = Router();

routes.use(HomeRoute);
routes.use(PostRoute);

export default routes;