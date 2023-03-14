import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private users: Array<User> = [
    {
      id: 1,
      username: 'danillobr',
      email: 'danillo@gmail.com',
      fullName: 'Danillo Rodrigues Abreu',
      password: 'danilo321',
      created_at: new Date(),
    },
  ];

  public create(user: User): User {
    this.users.push(user);

    return user;
  }

  public findByUsername(username: string) {
    return this.users.find(user => user.username === username);
  }
}
