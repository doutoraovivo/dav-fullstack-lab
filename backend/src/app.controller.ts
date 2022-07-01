import { Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BaseController } from './base.controller';

/**
 *
 */
export class AppController extends BaseController {
  constructor(private readonly appService: AppService) {
    super();
  }

  /**
   *
   * @returns
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
