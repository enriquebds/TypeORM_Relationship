import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users";
import { hash } from "bcrypt";

const updateUser = async (
  { name, email, password }: IUserUpdate,
  id: string
): Promise<User | Array<string | number>> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id,
  });

  if (!findUser) {
    return ["User not found", 404];
  }

  await userRepository.update(id, {
    name: name ? name : findUser.name,
    email: email ? email : findUser.email,
    password: password ? await hash(password, 10) : findUser.password,
  });

  const user = await userRepository.findOneBy({
    id,
  });

  return user!;
};

export default updateUser;
