import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import listUsersController from "../controllers/user/listUsers.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const routes = Router();

routes.post("", createUserController);
routes.get("", tokenAuthMiddleware, verifyIsAdmMiddleware, listUsersController);

export default routes;
