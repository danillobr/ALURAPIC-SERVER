import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  public create(@Body() user: User): User {
    const userCreated = this.userService.create(user);

    return userCreated;
  }

  @Get(':username')
  public findByUsername(@Param('username') username: string): User {
    const user = this.userService.findByUsername(username);

    return user;
  }
}
