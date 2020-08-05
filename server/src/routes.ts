import express, { request } from 'express';
import ClassesController from './controllers/ClassesController';


const routes = express.Router();
const classesControler = new ClassesController();

routes.post('/classes',classesControler.create);

export default routes;