/* eslint-disable prettier/prettier */
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): void {
    // Complete aqui
    const emailAlreadyExists = this.usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new Error("E-mail already exists!");
    }

    this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
