import listSchedulesOfAProperty from "../../services/schedules/listSchedulesOfAProperty";
import { Request, Response } from "express";

const listSchedulesOfAPropertyController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const listSchedules = await listSchedulesOfAProperty(id);
  return res.json(listSchedules);
};

export default listSchedulesOfAPropertyController;
