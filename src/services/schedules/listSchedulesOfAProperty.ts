import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { Property } from "../../entities/properties.entity";

const listSchedulesOfAProperty = async (id: string) => {
  const propertyRepository = AppDataSource.getRepository(Property);

  const properties = await propertyRepository.findOneBy({
    id,
  });

  if (!properties) {
    throw new AppError("Invalid Id", 404);
  }

  const schedule = propertyRepository.findOne({
    where: {
      id,
    },
    relations: {
      schedules: true,
    },
  });

  return schedule;
};

export default listSchedulesOfAProperty;
