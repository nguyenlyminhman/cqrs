import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { OrderNekoCreatedEvent } from "../impl/order-neko-created.event";

@EventsHandler(OrderNekoCreatedEvent)
export class SendMailHandler implements IEventHandler<OrderNekoCreatedEvent> {
  async handle(event: OrderNekoCreatedEvent) {
    console.log(`Mail: sending in 3s`);
    await new Promise((res) => setTimeout(res, 3000));
    console.log(`Mail: sent in 3s`);
  }
}