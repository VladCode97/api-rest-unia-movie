import { Body, Controller, Get, Inject, Post, Res, UseGuards } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import SubscriptionDTO from '../../Common/DTO/subscriptions.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { JwtGuard } from '../../Common/Guards/jwt.guard';

@Controller('Subscription')
@UseGuards(JwtGuard)
export class SubscriptionsController {
  @Inject()
  private subscriptionsService: SubscriptionsService;

  @Post('Create')
  @ApiResponse({
    status: 201,
    description: 'This subscription has been successfully created',
  })
  @ApiResponse({ status: 403, description: 'Forbaiden' })
  async createsubscription(
    @Body() subscription: SubscriptionDTO,
    @Res() response: Response,
  ) {
    return response.json(
      await this.subscriptionsService.createSubscriptions(subscription),
    );
  }

  @Get('Subscriptions')
  @ApiResponse({
    status: 201,
    description: 'This subscription has been successfully created',
  })
  @ApiResponse({ status: 403, description: 'Forbaiden' })
  async viewAllSubscriptions(@Res() response: Response) {
    return response.json(
      await this.subscriptionsService.viewAllSubscriptions(),
    );
  }
}
