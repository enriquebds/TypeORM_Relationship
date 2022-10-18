import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const deleteUser = async (
  id: string
): Promise<User | Array<string | number>> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (!user?.isActive) {
    throw new AppError("This account are disabled", 400);
  }

  user.isActive = false;
  await userRepository.save(user);

  const returningUser = await userRepository.findOneBy({
    id,
  });

  return returningUser!;
};

export default deleteUser;
