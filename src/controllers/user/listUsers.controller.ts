import listUsers from "../../services/user/listUsers";
import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsers();
  return res.json(instanceToPlain(users));
};

export default listUsersController;
