import { Request, Response } from "express";
import { injectable, inject } from "inversify";
import TYPES from "../types";
import { IAuthService } from "../interfaces/IAuthService";

@injectable()
class AuthController {
  constructor(@inject(TYPES.AuthService) private authService: IAuthService) {}

  async signup(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    const token = await this.authService.signup(username, password);
    res.json({ token });
  }

  async login(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    const token = await this.authService.login(username, password);

    if (token) {
      res.json({ token, success: true, message: "Login Successful" });
    } else {
      res.status(401).json({ error: "Invalid Credentials" });
    }
  }
}

export { AuthController };
