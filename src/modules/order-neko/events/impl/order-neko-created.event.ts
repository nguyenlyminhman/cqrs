import { CreateOrderDto } from "src/modules/order/dtos/create-order.dto";

export class OrderNekoCreatedEvent {
    constructor(public readonly createOrderDto: CreateOrderDto) {}
  }