import { Container } from "inversify";
import TYPES from "./types";
import { IAuthService } from "./interfaces/IAuthService";
import { IUserRepository } from "./domain/repositories/IUserRepository";
import { AuthService } from "./domain/services/AuthService";
import { UserRepository } from "./repositories/UserRepository";

const container = new Container();

container.bind<IAuthService>(TYPES.AuthService).to(AuthService);
container.bind<IUserRepository>(TYPES.UserRepository).to(UserRepository);

export default container;
