import { Request, Response } from "express";
import { User } from "../../entities/user.entity";
import deleteUser from "../../services/user/deleteUser";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);

    if (deletedUser instanceof User) {
      return res.status(204).json(deletedUser);
    }
    return res.status(deletedUser[1] as number).json({
      message: deletedUser[0],
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({
        message: error.message,
      });
    }
  }
};

export default deleteUserController;
