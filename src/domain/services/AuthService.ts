import jwt from "jsonwebtoken";
import { injectable, inject } from "inversify";
import TYPES from "../../types";
import { IUserRepository } from "../repositories/IUserRepository";
import { IAuthService } from "../../interfaces/IAuthService";
import { User } from "../entities/User";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

@injectable()
class AuthService implements IAuthService {
  constructor(
    @inject(TYPES.UserRepository) private userRepository: IUserRepository
  ) {}

  async signup(username: string, password: string): Promise<string> {
    // Validate input, generate and save user
    const user = new User(uuidv4(), username, await bcrypt.hash(password, 10));
    await this.userRepository.save(user);
    return this.generateToken(user.id);
  }

  async login(username: string, password: string): Promise<string | null> {
    // Validate input, authenticate user, and generate token
    const user = await this.userRepository.findByUsername(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      return this.generateToken(user.id);
    }
    return null;
  }

  private generateToken(userId: string): string {
    // Implement JWT token generation
    const token = jwt.sign({ userId }, "your_secret_key", { expiresIn: "1h" });
    return token;
  }
}

export { AuthService };
