import { Request, Response } from "express";
import { User } from "../../entities/user.entity";
import deleteUser from "../../services/user/deleteUser";

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteUser(id);

  return res.status(204).send();
};

export default deleteUserController;
