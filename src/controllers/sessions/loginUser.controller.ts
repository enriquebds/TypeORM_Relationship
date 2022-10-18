import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/users";
import loginUser from "../../services/login/loginUser";

const loginUserController = async (req: Request, res: Response) => {
  try {
    const data: IUserLogin = req.body;
    const token = await loginUser(data);

    return res.json({ token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(403).json({
        message: error.message,
      });
    }
  }
};

export default loginUserController;
