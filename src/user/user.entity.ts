import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsUsernameUnique } from './is-username-unique.validator';

export class User {
  id: number;

  @IsNotEmpty({
    message: 'username is required.',
  })
  @IsString({
    message: 'username needs to be a string.',
  })
  @IsUsernameUnique({ message: 'username should be unique' })
  username: string;

  @IsEmail(
    {},
    {
      message: 'email needs to be a valid email address.',
    },
  )
  email: string;

  @Exclude({
    toPlainOnly: true,
  })
  @IsNotEmpty({
    message: 'password is required.',
  })
  password: string;

  @IsNotEmpty({
    message: 'fullName is required.',
  })
  fullName: string;

  created_at: Date;
}
