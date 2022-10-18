import { Router } from "express";
import loginUserController from "../controllers/sessions/loginUser.controller";

const routes = Router();

routes.post("", loginUserController);

export default routes;
