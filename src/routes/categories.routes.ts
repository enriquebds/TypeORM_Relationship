import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import listCategoryController from "../controllers/categories/listCategory.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const routes = Router();

routes.post(
  "",
  tokenAuthMiddleware,
  verifyIsAdmMiddleware,
  createCategoryController
);
routes.get("", listCategoryController);

export default routes;
