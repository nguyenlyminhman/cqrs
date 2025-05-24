import { CreateOrderDto } from "src/modules/order/dtos/create-order.dto";

export class CreateOrderNekoCommand {
  constructor(public readonly createOrderDto: CreateOrderDto) {}
}
