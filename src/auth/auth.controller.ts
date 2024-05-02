import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { NATS_CLIENT } from 'src/config';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { LoginUserDto, RegisterUserDto } from './dto';
import { catchError } from 'rxjs';
import { AuthGuard } from './guards/auth.guard';
import { Token, User } from './decorators';
import { sessionToken, sessionUser } from './interfaces';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(NATS_CLIENT)
    private readonly authClient: ClientProxy,
  ) {}

  @Post('register')
  registerUser(@Body() registerUserDto: RegisterUserDto) {
    return this.authClient.send('auth.register.user', registerUserDto).pipe(
      catchError((error) => {
        throw new RpcException(error);
      }),
    );
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authClient.send('auth.login.user', loginUserDto).pipe(
      catchError((error) => {
        throw new RpcException(error);
      }),
    );
  }

  @UseGuards(AuthGuard)
  @Get('verify')
  verifyToken(@User() user: sessionUser, @Token() token: sessionToken) {
    return this.authClient
      .send('auth.verify.user', {
        user,
        token,
      })
      .pipe(
        catchError((error) => {
          throw new RpcException(error);
        }),
      );
  }
}
