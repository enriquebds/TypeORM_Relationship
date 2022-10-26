import { Router } from "express";
import createSchedulesController from "../controllers/schedules/createSchedules.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";

const routes = Router();

routes.post("", tokenAuthMiddleware, createSchedulesController);

export default routes;
