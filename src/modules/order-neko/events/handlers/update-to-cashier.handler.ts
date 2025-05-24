import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { OrderNekoCreatedEvent } from "../impl/order-neko-created.event";

@EventsHandler(OrderNekoCreatedEvent)
export class UpdateToCashierHandler implements IEventHandler<OrderNekoCreatedEvent> {
  async handle(event: OrderNekoCreatedEvent) {
    console.log(`Cashier: updating in 4s`);
    await new Promise((res) => setTimeout(res, 4000));
    console.log(`Cashier: updated in 4s`);
  }
}