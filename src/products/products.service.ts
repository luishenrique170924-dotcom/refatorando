import { Injectable, NotFoundException } from '@nestjs/common';
import { UpsertProductDTO } from './dto/upsert-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    private products: Array<any>;
    
    constructor(
        @InjectRepository(Product, 'dbProducts')
        private productsRepository: Repository<Product>
    ) {
        this.products = [
        {
            "id": 1,
            "name": "Biscoito"
        },
        {
            "id": 2,
            "name": "Morango"
        }
        ]

    }

    findAll() {
        return this.productsRepository.find();
    }

    async create(product: UpsertProductDTO) {
        const newProduct = this.productsRepository.create(product);        
        await this.productsRepository.save(newProduct);
        
        return {
            "message": "Produto Criado!"
        };
    }

async update(id: number, data: UpsertProductDTO) {
    const result = await this.productsRepository.update(id, data);

    if (result.affected === 0) {
        throw new NotFoundException('Produto não encontrado');
    }

    return { message: 'Produto atualizado!' };
}

async delete(id: number) {
    const result = await this.productsRepository.delete(id);

    if (result.affected === 0) {
        throw new NotFoundException('Produto não encontrado');
    }

    return { message: 'Produto deletado!' };
}



}