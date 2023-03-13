import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class User {
  id: number;

  @IsNotEmpty({
    message: 'username is required.',
  })
  @IsString({
    message: 'username needs to be a string.',
  })
  username: string;

  @IsEmail(
    {},
    {
      message: 'email needs to be a valid email address.',
    },
  )
  email: string;

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
