import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CustomersService } from "./customers.service";
import { UpsertDTO } from "./dto/upsert.dto"
// @ -> é um decorator
// Eles são uma 
// função (ou método) que modificam 
// o comportamento de outra função passada, 
// retornando uma nova função.
@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}
    
    @Get('/')
    async showAll() {
  const customers = await this.customersService.get();
  return { customers };
}


    @Post('/')
    create(@Body() bodyCustomer: UpsertDTO) {
        return this.customersService.create(bodyCustomer);
    }

     @Put(":id")
  update(@Param("id") id: number, @Body() body: UpsertDTO) {
    return this.customersService.update(id, body);
  }

   @Delete(":id")
  delete(@Param("id") id: number) {
    return this.customersService.delete(id);
  }

}