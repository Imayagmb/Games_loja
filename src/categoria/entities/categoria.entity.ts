import { Transform } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';
import { Produto } from 'src/produto/entities/produto.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_categorias')
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 60, nullable: false })
  @Length(2, 60, {
    message: 'Nome da categoria deve ter entre 3 a 60 caracteres',
  })
  @IsNotEmpty({ message: 'Nome da categoria é obrigatório' })
  @Transform((param) => param.value.trim())
  nome: string;

  @OneToMany(() => Produto, (produto) => produto.categoria)
  produtos: Produto[];
}