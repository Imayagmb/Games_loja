import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from '../entities/produto.entity';
import { ILike, LessThan, MoreThan, Repository } from 'typeorm';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  findAll(): Promise<Produto[]> {
    return this.produtoRepository.find({
      relations: {
        categoria: true,
      },
    });
  }

  async findById(id: number): Promise<Produto> {
    const resultado = await this.produtoRepository.findOne({
      where: { id },
      relations: {
        categoria: true,
      },
    });
    if (resultado == null) {
      throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND);
    }
    return resultado;
  }

  findByNome(nome: string): Promise<Produto[]> {
    return this.produtoRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      relations: {
        categoria: true,
      },
    });
  }

  create(produto: Produto): Promise<Produto> {
    return this.produtoRepository.save(produto);
  }

  update(produto: Produto): Promise<Produto> {
    return this.produtoRepository.save(produto);
  }

  delete(id: number) {
    return this.produtoRepository.delete(id);
  }

  async findPrecoMaiorQue(valor: number): Promise<Produto[]>{
    return await this.produtoRepository.find({
        where: {
            preco: MoreThan(valor)
        },
        order: {
            preco: 'ASC'
        },
        relations: {
            categoria: true
        }
    });
  }

  async findPrecoMenorQue(valor: number): Promise<Produto[]>{
    return await this.produtoRepository.find({
        where: {
            preco: LessThan(valor)
        },
        order: {
            preco: 'DESC'
        },
        relations: {
            categoria: true
        }
    });
  }


}
