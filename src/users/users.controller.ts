import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return 'Lista de usuários';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Usuário com id ${id}`;
  }

  @Post()
  create(@Body() createUserDto: any) {
    return 'Usuário criado';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    // Atualiza um usuário existente
    return `Usuário com id ${id} atualizado`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // Remove um usuário
    return `Usuário com id ${id} removido`;
  }
}
