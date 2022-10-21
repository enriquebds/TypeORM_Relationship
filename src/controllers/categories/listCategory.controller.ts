import { Request, Response } from "express";
import listCategory from "../../services/categories/listCategory";

const listCategoryController = async (req: Request, res: Response) => {
  const categories = await listCategory();
  return res.json(categories);
};

export default listCategoryController;
