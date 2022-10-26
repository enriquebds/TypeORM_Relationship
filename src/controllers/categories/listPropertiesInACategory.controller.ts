import listPropertiesInACategory from "../../services/categories/listPropertiesInACategory";
import { Request, Response } from "express";

const listPropertiesInACategoryController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const properties = await listPropertiesInACategory(id);
  return res.json(properties);
};
export default listPropertiesInACategoryController;
