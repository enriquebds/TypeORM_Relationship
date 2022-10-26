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

  const property = await propertyRepository.findOneBy({
    id: propertyId,
  });
  const schedules = await scheduleRepository.find();
  const userExists = await userRepository.find();

  const schedulesExists = schedules.find((schedules) => schedules);
  const user = userExists.find((item) => item.id === userId);

  if (schedulesExists) {
    throw new AppError("Already have an appointment at this time", 400);
  }
  if (!property) {
    throw new AppError("Invalid property id", 404);
  }

  const createdSchedule = scheduleRepository.create({
    date,
    hour,
    user,
    properties: property,
  });

  await scheduleRepository.save(createdSchedule);

  return createdSchedule;
};

export default createSchedules;
