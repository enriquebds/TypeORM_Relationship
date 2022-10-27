import AppDataSource from "../../data-source";
import { Schedules } from "../../entities/schedules.entity";
import { Property } from "../../entities/properties.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules";

const createSchedules = async ({
  date,
  hour,
  propertyId,
  userId,
}: IScheduleRequest): Promise<Schedules> => {
  const scheduleRepository = AppDataSource.getRepository(Schedules);
  const propertyRepository = AppDataSource.getRepository(Property);
  const userRepository = AppDataSource.getRepository(User);

  const userExists = await userRepository.find();
  const properties = await propertyRepository.find();

  const user = userExists.find((item) => item.id === userId);

  const property = properties.find((e) => e.id === propertyId);

  const createdSchedule = scheduleRepository.create({
    date,
    hour,
    user: user,
    properties: property,
  });

  await scheduleRepository.save(createdSchedule);

  return createdSchedule;
};

export default createSchedules;
