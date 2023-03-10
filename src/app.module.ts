import { Module } from '@nestjs/common';

import { UserController } from './user/userController';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
