import { Module } from '@nestjs/common';
import { CategoriaService } from './services/categoria.service';
import { CategoriaController } from './controllers/categoria.controller';
import { Categoria } from './entities/categoria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  exports:[],
  controllers: [CategoriaController],
  providers: [CategoriaService],
})
export class CategoriaModule {}
