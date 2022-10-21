import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { Category } from "../../entities/categories.entity";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategory = async ({
  name,
}: ICategoryRequest): Promise<Category> => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const categoryExists = await categoryRepository.findOneBy({
    name,
  });

  if (!name) {
    throw new AppError("Name required", 400);
  }
  if (categoryExists) {
    throw new AppError("Category already exists", 400);
  }

  const category = categoryRepository.create({
    name,
  });
  await categoryRepository.save(category);

  return category;
};

export default createCategory;
