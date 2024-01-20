export interface IAuthService {
  signup(username: string, password: string): Promise<string>;
  login(username: string, password: string): Promise<string | null>;
}
