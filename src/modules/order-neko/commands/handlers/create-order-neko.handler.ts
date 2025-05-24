import { CommandHandler, EventBus, ICommandHandler } from "@nestjs/cqrs";
import { CreateOrderNekoCommand } from "../impl/create-order-neko.command";
import { OrderNekoCreatedEvent } from "../../events/impl/order-neko-created.event";

@CommandHandler(CreateOrderNekoCommand)
export class CreateOrderNekoHandler implements ICommandHandler<CreateOrderNekoCommand> {
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: CreateOrderNekoCommand): Promise<any> {
    const { createOrderDto } = command;
    console.log(`Creating order...`);
    await new Promise((res) => setTimeout(res, 3000)); // giả lập 3 phút

    console.log(`Order created.\n`);

    // Emit event
    console.log(`Begin pushing to: OrderNekoCreatedEvent`);
    this.eventBus.publish(new OrderNekoCreatedEvent(createOrderDto));
  }
}