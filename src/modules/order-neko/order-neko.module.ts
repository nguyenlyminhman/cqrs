import { Module } from '@nestjs/common';
import { OrderNekoController } from './order-neko.controller'; 
import { OrderNekoService } from './order-neko.service'; 
import { CqrsModule } from '@nestjs/cqrs';
import { OrderNekoCommandHandlers } from './commands/handlers';
import { OrderNekoEvents } from './events/handlers';

@Module({
  imports: [CqrsModule],
  controllers: [OrderNekoController],
  providers: [
    OrderNekoService, 
    ...OrderNekoCommandHandlers,
    ...OrderNekoEvents
    ,
  ]
})
export class OrderNekoModule {}
