import { Router } from "express";
import createPropertyController from "../controllers/properties/createProperty.controller";
import listPropertiesController from "../controllers/properties/listProperties.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const routes = Router();

routes.post(
  "",
  tokenAuthMiddleware,
  verifyIsAdmMiddleware,
  createPropertyController
);
routes.get("", listPropertiesController);

export default routes;
