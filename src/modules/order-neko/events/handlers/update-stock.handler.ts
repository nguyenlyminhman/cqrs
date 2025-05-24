import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { OrderNekoCreatedEvent } from "../impl/order-neko-created.event";

@EventsHandler(OrderNekoCreatedEvent)
export class UpdateStockHandler implements IEventHandler<OrderNekoCreatedEvent> {
  async handle(event: OrderNekoCreatedEvent) {
    console.log(`Stock: updating in 2s`);
    await new Promise((res) => setTimeout(res, 2000));
    console.log(`Stock: updated in 2s`);
  }
}