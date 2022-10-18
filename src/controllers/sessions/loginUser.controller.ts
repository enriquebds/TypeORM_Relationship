import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/users";
import loginUser from "../../services/login/loginUser";

const loginUserController = async (req: Request, res: Response) => {
  const data: IUserLogin = req.body;
  const token = await loginUser(data);

  return res.json({ token });
};

export default loginUserController;
