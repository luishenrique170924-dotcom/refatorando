import { Injectable } from "@nestjs/common";
import { UpsertDTO } from "./dto/upsert.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Customer } from "./customers.entity";
import { Repository } from "typeorm";

@Injectable()
export class CustomersService {
   constructor(@InjectRepository(Customer, 'dbCustomers') private customersRepository: Repository<Customer>) {
   }

   async get() {
    return this.customersRepository.find();
   }

   async create(customer: UpsertDTO) {
     const newCustomer = this.customersRepository.create(customer)
     await this.customersRepository.save(newCustomer)
       


     return {
        "message": "Salvo com sucesso"
     };
   }

   async update(id: number, customer: UpsertDTO) {
  await this.customersRepository.update(id, customer);

  return {
    message: "Atualizado com sucesso",
  };
}

async delete(id: number) {
  await this.customersRepository.delete(id);

  return {
    message: "Deletado com sucesso",
  };
}

}