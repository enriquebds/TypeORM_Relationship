import { Request, Response } from "express";
import listProperties from "../../services/properties/listProperties";

const listPropertiesController = async (req: Request, res: Response) => {
  const properties = await listProperties();
  return res.json(properties);
};

export default listPropertiesController;
