import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { NestResponse } from '../core/http/nest-response';
import { NestResponseBuilder } from '../core/http/nest-response-builder';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  public create(@Body() user: User): NestResponse {
    const userCreated = this.userService.create(user);
    return new NestResponseBuilder()
      .withStatus(HttpStatus.CREATED)
      .withHeaders({
        Location: `/users/${user.username}`,
      })
      .withBody(user)
      .build();
  }

  @Get(':username')
  public findByUsername(@Param('username') username: string): User {
    const user = this.userService.findByUsername(username);
    if (!user) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: "User doesn't exist.",
      });
    }
    return user;
  }
}
