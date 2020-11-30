
import { SubscriptionsService } from 'src/Modules/Subscriptions/subscriptions.service';
import { SubscriptionsController } from 'src/Modules/Subscriptions/subscriptions.controller';
import { Test } from '@nestjs/testing';


describe('AuthController', () => {
    let subscriptionsController: SubscriptionsController;
    let subscriptionsService: SubscriptionsService;
  
    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [SubscriptionsController],
            providers: [SubscriptionsService],
          }).compile();
    
          subscriptionsService = moduleRef.get<SubscriptionsService>(SubscriptionsService);
          subscriptionsController = moduleRef.get<SubscriptionsController>(SubscriptionsController);
      });
    
    });