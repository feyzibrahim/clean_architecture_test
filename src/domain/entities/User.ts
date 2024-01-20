export class User implements IUser {
  constructor(
    public id: string,
    public username: string,
    public password: string
  ) {}
}
