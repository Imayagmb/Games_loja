import { Transform, Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsUrl,
  Length,
  Min,
  MinDate,
} from 'class-validator';
import { Categoria } from 'src/categoria/entities/categoria.entity';
import { NumericTransformer } from 'src/util/NumericTransformer';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 60, nullable: false })
  @IsNotEmpty({ message: 'O nome do produto é obrigatório!' })
  @Length(4, 60, { message: 'O tamanho deve ter no mínimo 4 caracteres' })
  @Transform((param) => param.value.trim())
  nome: string;

  @Column('decimal', {
    precision: 6,
    nullable: false,
    scale: 2,
    transformer: new NumericTransformer(),
  })
  @IsNotEmpty({ message: 'O preço do produto é obrigatório!' })
  @IsNumber({}, { message: 'O preço precisa ser numérico' })
  @Min(0, { message: 'O preço não pode ser negativo' })
  @Type(() => Number)
  preco: number;

  @Column('date', { nullable: false })
  @MinDate(new Date(), { message: 'A validade precisa ser uma data futura' })
  @Type(() => Date)
  dataValidade: Date;

  @Column('int', { nullable: true, default: 0 })
  @Min(0, { message: 'A quantidade não pode ser negativa' })
  quantidade: number;

  @Column('varchar', { length: 255, nullable: true })
  @IsUrl()
  imgUrl: string;

  @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}
