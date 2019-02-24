import { Role } from './role';

export class User {
  login: string;
  name: string;
  email: string;
  roles: Role[];
}
