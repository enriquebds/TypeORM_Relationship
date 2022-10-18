import { Request, Response } from "express";
import { IUser } from "../../interfaces/users";
import createUser from "../../services/user/createUser";
import { instanceToPlain } from "class-transformer";

const createUserController = async (req: Request, res: Response) => {
  try {
    const user: IUser = req.body;

    const createdUser = await createUser(user);
    return res.status(201).json(instanceToPlain(createdUser));
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default createUserController;
