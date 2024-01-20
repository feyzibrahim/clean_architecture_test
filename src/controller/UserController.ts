import { Request, Response } from "express";
import { controller, httpGet, httpPost } from "inversify-express-utils";
import { UserUseCase } from "../useCases/UserUseCase";
import { inject } from "inversify";
import { User } from "../Entities/User";

@controller("/users")
export class UserController {
  constructor(@inject(UserUseCase) private userUserCase: UserUseCase) {}
  @httpGet("/")
  async getUsers(_: Request, res: Response) {
    const users = await this.userUserCase.getUsers();

    return res.json(users);
  }

  @httpPost("/")
  async createUser(req: Request, res: Response) {
    const userData: User = req.body;
    const user = this.userUserCase.createUser(userData);
    return res.json(user);
  }
}
