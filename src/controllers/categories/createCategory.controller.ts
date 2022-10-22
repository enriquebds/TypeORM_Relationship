import createCategory from "../../services/categories/createCategory";
import { Request, Response } from "express";

const createCategoryController = async (req: Request, res: Response) => {
  const { name } = req.body;

  const createdCategory = await createCategory({ name });
  return res.status(201).json(createdCategory);
};

export default createCategoryController;
