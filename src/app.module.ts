import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { OrderModule } from './modules/order/order.module';
import { PostModule } from './modules/post/post.module';
import { OrderNekoModule } from './modules/order-neko/order-neko.module';

@Module({
  imports: [
    PrismaModule, 
    OrderModule, 
    PostModule, 
    OrderNekoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
