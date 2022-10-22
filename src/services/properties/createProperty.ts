import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entity";
import { Property } from "../../entities/properties.entity";
import { Category } from "../../entities/categories.entity";
import { AppError } from "../../errors/appError";
import { IPropertyRequest } from "../../interfaces/properties/index";

const createProperty = async ({
  value,
  size,
  address,
  categoryId,
}: IPropertyRequest) => {
  const propertyRepository = AppDataSource.getRepository(Property);
  const categoryRepository = AppDataSource.getRepository(Category);
  const addressRepository = AppDataSource.getRepository(Addresses);

  const property = await propertyRepository.find();

  const propertyExists = property.find((item) => item.id === item.id);

  if (propertyExists) {
    throw new AppError("Property already exists", 400);
  }
};

export default createProperty;
