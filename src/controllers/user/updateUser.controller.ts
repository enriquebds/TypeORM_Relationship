import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/users";
import updateUser from "../../services/user/updateUser";

const updateUserController = async (req: Request, res: Response) => {
  const user: IUserUpdate = req.body;
  const id: string = req.params.id;

  const updatedUser = await updateUser(user, id);

  return res.status(200).json({
    message: "User updated",
    user: updatedUser,
  });
};

export default updateUserController;
