import { Request, Response } from "express";
import { IUser } from "../../interfaces/users";
import createUser from "../../services/user/createUser";
import { instanceToPlain } from "class-transformer";

const createUserController = async (req: Request, res: Response) => {
  const user: IUser = req.body;

  const createdUser = await createUser(user);
  return res.status(201).json(instanceToPlain(createdUser));
};

export default createUserController;
