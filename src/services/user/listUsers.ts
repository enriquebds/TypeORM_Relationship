import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const listUsers = async (): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  return users;
};

export default listUsers;
