import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  private userService = new UserService();

  @Post()
  public create(@Body() user) {
    const userCreated = this.userService.create(user);

    return userCreated;
  }
}
