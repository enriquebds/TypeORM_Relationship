import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { AppError } from "../../errors/appError";

const listPropertiesInACategory = async (id: string): Promise<Category> => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const category = await categoryRepository.findOne({
    where: {
      id,
    },
    relations: {
      properties: true,
    },
  });

  if (!category) {
    throw new AppError("Not found", 404);
  }

  return category;
};

export default listPropertiesInACategory;
