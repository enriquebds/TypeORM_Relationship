import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { Property } from "../../entities/properties.entity";
import { AppError } from "../../errors/appError";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategory = async (
  { name }: ICategoryRequest,
  id: string
): Promise<Category> => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const propertyRepository = AppDataSource.getRepository(Property);

  const property = await propertyRepository.findOneBy({
    id,
  });

  const categoryExists = await categoryRepository.findOneBy({
    name,
  });

  if (categoryExists) {
    throw new AppError("Category already exists", 400);
  }

  if (!name) {
    throw new AppError("Name is missing", 400);
  }

  const category = categoryRepository.create({
    name,
    property: property!,
  });
  await categoryRepository.save(category);

  return category;
};

export default createCategory;
