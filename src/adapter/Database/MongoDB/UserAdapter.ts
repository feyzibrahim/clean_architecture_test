import { injectable } from "inversify";
import { User } from "../../../Entities/User";
import { UserInterface } from "../../../interface/UserInterface";
import UserModal from "./Modal/UserModal";

@injectable()
export class UserAdapter implements UserInterface {
  async getUsers(): Promise<User[]> {
    const users = await UserModal.find({});
    return users;
  }

  async createUser(userData: User): Promise<User> {
    const user = await UserModal.create(userData);
    return user;
  }
}
