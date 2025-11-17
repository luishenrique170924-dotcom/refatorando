2
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { Module } from '@nestjs/common';

@Module({
imports: [TypeOrmModule.forFeature([
Product], 'dbProducts')],
controllers: [ProductsController],
providers: [ProductsService]
})
export class ProductsModule {}