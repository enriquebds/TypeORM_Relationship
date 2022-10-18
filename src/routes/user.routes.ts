import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import listUsersController from "../controllers/user/listUsers.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";
import verifyIsAdmPatchMiddleware from "../middlewares/verifyIsAdmPatch.middleware";

const routes = Router();

routes.post("", createUserController);
routes.get("", tokenAuthMiddleware, verifyIsAdmMiddleware, listUsersController);
routes.patch(
  "/:id",
  tokenAuthMiddleware,
  verifyIsAdmPatchMiddleware,
  updateUserController
);
routes.delete(
  "/:id",
  tokenAuthMiddleware,
  verifyIsAdmMiddleware,
  deleteUserController
);

export default routes;
