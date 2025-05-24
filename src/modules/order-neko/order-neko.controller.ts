import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { OrderNekoService } from './order-neko.service';
import { CreateOrderDto } from '../order/dtos/create-order.dto';

@Controller('order-neko')
@ApiTags('Order Neko')
export class OrderNekoController {
constructor(private readonly orderNekoService: OrderNekoService) {}


  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiCreatedResponse({
    description: 'Create new order-neko',
    type: CreateOrderDto,
  })
  async create(@Body() createPostDto: CreateOrderDto) {
    return this.orderNekoService.create(createPostDto);
  }

}
