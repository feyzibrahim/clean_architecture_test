export interface IUserRepository {
  findById(id: string): Promise<IUser | null>;
  findByUsername(username: string): Promise<IUser | null>;
  save(user: IUser): Promise<void>;
}
