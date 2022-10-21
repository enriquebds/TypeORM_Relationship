import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";

const routes = Router();

routes.post("", createCategoryController);

export default routes;
