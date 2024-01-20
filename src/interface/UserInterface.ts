import { User } from "../Entities/User";

export interface UserInterface {
  getUsers(): Promise<User[]>;
  createUser(userData: User): Promise<User>;
}
