
import AuthService from 'src/Modules/Auth/auth.service';
import {AuthController} from 'src/Modules/Auth/auth.controller';
import { Test } from '@nestjs/testing';


describe('AuthController', () => {
    let authController: AuthController;
    let authService: AuthService;
  
    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [AuthController],
            providers: [AuthService],
          }).compile();
    
          authService = moduleRef.get<AuthService>(AuthService);
          authController = moduleRef.get<AuthController>(AuthController);
      });
    
    });