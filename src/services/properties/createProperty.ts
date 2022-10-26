import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entity";
import { Property } from "../../entities/properties.entity";
import { Category } from "../../entities/categories.entity";
import { AppError } from "../../errors/appError";
import {
  IAddressRequest,
  IPropertyRequest,
} from "../../interfaces/properties/index";

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
  const addresses = await addressRepository.find();
  const categoryExists = await categoryRepository.findOneBy({
    id: categoryId,
  });
  if (!categoryExists) {
    throw new AppError("Invalid category", 404);
  }

  const propertyExists = property.find(
    (item) => item.size === size && item.value === value
  );
  const addressExists = addresses.find((item) => {
    item.district === address.district && item.number === address.number;
  });

  if (propertyExists) {
    throw new AppError("Property already exists", 400);
  }

  if (addressExists) {
    throw new AppError("Address already exists", 400);
  }

  const newAddress: IAddressRequest = addressRepository.create({
    district: address.district,
    zipCode: address.zipCode,
    number: address.number,
    city: address.city,
    state: address.state,
  });

  if (newAddress.zipCode.length > 8) {
    throw new AppError("Invalid zipCode", 400);
  }

  if (newAddress.state.length > 2) {
    throw new AppError("Invalid zipCode", 400);
  }

  await addressRepository.save(newAddress);

  const newProperty = propertyRepository.create({
    sold: false,
    value,
    size,
    createdAt: new Date(),
    updatedAt: new Date(),
    address: newAddress,
    category: categoryExists,
  });

  await propertyRepository.save(newProperty);

  return newProperty;
};

export default createProperty;
