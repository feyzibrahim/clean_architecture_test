// src/repositories/UserRepository.ts
import mongoose from "mongoose";
import { User } from "../domain/entities/User";

mongoose.connect("mongodb://localhost:27017/your_database_name");

const userSchema = new mongoose.Schema({
  id: String,
  username: String,
  password: String,
});

const UserModel = mongoose.model("User", userSchema);

export class UserRepository {
  async findById(id: string): Promise<User | null> {
    const user = await UserModel.findById(id).lean().exec();
    return user as User | null;
  }

  async findByUsername(username: string): Promise<User | null> {
    const user = await UserModel.findOne({ username }).lean().exec();
    return user as User | null;
  }

  async save(user: User): Promise<void> {
    await new UserModel(user).save();
  }
}
