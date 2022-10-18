import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";

const routes = Router();

routes.post("", createUserController);

export default routes;
