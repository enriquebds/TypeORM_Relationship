import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import listCategoryController from "../controllers/categories/listCategory.controller";
import listPropertiesInACategoryController from "../controllers/categories/listPropertiesInACategory.controller";
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
routes.get("/:id/properties", listPropertiesInACategoryController);

export default routes;
