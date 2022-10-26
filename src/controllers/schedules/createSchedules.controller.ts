import createSchedules from "../../services/schedules/createSchedules";
import { Request, Response } from "express";

const createSchedulesController = async (req: Request, res: Response) => {
  const { date, hour, propertyId } = req.body;
  const userId = req.user.id;
  const createdSchedule = createSchedules({ date, hour, propertyId, userId });

  return res.status(201).json({
    schedule: createdSchedule,
    message: "Schedule completed",
  });
};

export default createSchedulesController;
