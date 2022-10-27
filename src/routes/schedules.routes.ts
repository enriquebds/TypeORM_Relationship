import { Router } from "express";
import createSchedulesController from "../controllers/schedules/createSchedules.controller";
import listSchedulesOfAPropertyController from "../controllers/schedules/listSchedulesOfAProperty.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const routes = Router();

routes.post("", tokenAuthMiddleware, createSchedulesController);
routes.get(
  "/properties/:id",
  tokenAuthMiddleware,
  verifyIsAdmMiddleware,
  listSchedulesOfAPropertyController
);

export default routes;
