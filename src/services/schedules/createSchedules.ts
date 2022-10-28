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

  const takeAHour = Number(hour.replace(":", ""));

  if (takeAHour > 1800 || takeAHour < 800) {
    throw new AppError(
      "It is not possible to schedule outside opening hours (opening hours from 8:00 to 18:00)",
      400
    );
  }

  const createDate = new Date(date);
  const takeADay = createDate.getDay();

  if (takeADay === 0 || takeADay === 6) {
    throw new AppError("Invalid date", 400);
  }

  const userExists = await userRepository.find();
  const properties = await propertyRepository.find();

  const user = userExists.find((item) => item.id === userId);

  const property = properties.find((e) => e.id === propertyId);

  if (!property) {
    throw new AppError("Invalid property Id", 404);
  }

  const schedules = await scheduleRepository.findOne({
    where: {
      date: date,
      hour: hour,
    },
  });

  if (schedules) {
    throw new AppError("appointment already made", 400);
  }
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
