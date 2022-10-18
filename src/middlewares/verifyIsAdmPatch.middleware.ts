import { Request, Response, NextFunction } from "express";

const verifyIsAdmPatchMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isAdm) {
    return res.status(401).json({
      message: "User is not admin",
    });
  }

  if (req.body.isAdm !== undefined) {
    return res.status(401).json({
      message: "Field Unauthorized to Update",
    });
  }
  if (req.body.isActive !== undefined) {
    return res.status(401).json({
      message: "Field Unauthorized to Update",
    });
  }
  if (req.body.id !== undefined) {
    return res.status(401).json({
      message: "Field Unauthorized to Update",
    });
  }

  return next();
};

export default verifyIsAdmPatchMiddleware;
