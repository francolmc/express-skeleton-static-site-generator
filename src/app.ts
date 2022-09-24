import express, { Request, Response } from 'express';
import vars from './config/vars';
import path from 'path';
import bodyParser from 'body-parser';
import AllRoutes from './routes/index';

const app = express();

// settings
app.set('port', vars.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use(AllRoutes);

export default app;