import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateOrderDto } from '../order/dtos/create-order.dto';
import { CreateOrderNekoCommand } from './commands/impl';

@Injectable()
export class OrderNekoService {
    constructor(
        private commandBus: CommandBus
    ) { }

    async create(createOrderDto: CreateOrderDto) {
        return this.commandBus.execute(new CreateOrderNekoCommand(createOrderDto));
    }
}
