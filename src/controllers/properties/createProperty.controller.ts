import createProperty from "../../services/properties/createProperty";
import { Request, Response } from "express";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertyController = async (req: Request, res: Response) => {
  const { value, size, address, categoryId }: IPropertyRequest = req.body;

  const createdProperty = await createProperty({
    value,
    size,
    address,
    categoryId,
  });

  return res.status(201).json(createdProperty);
};

export default createPropertyController;
