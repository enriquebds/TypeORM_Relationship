import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";
import { hash } from "bcrypt";
import { AppError } from "../../errors/appError";

const createUser = async ({
  name,
  email,
  password,
  isAdm,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const userExists = await userRepository.findOneBy({
    email,
  });

  if (userExists) {
    throw new AppError("Email already being used", 400);
  }

  if (!password) {
    throw new AppError("Password is missing", 400);
  }

  const hashedPassword = await hash(password, 10);

  const user = userRepository.create({
    name,
    email,
    password: hashedPassword,
    isAdm,
  });
  await userRepository.save(user);

  return user;
};

export default createUser;
