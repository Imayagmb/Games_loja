import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutoService } from "../services/produto.service";
import { Produto } from "../entities/produto.entity";

@Controller('/produtos')
export class ProdutoController{

    constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.produtoService.findById(id);
  }

  @Get('/nome/:nome')
  findByNome(@Param('nome') nome: string) {
    return this.produtoService.findByNome(nome);
  }

  @Get('/preco/maior/:valor')
  findPrecoMaiorQue(@Param('valor') valor: number) {
    return this.produtoService.findPrecoMaiorQue(valor);
  }

  @Get('/preco/menor/:valor')
  findPrecoMenorQue(@Param('valor') valor: number) {
    return this.produtoService.findPrecoMenorQue(valor);
  }

  @Post()
  create(@Body() produto: Produto) {
    return this.produtoService.create(produto);
  }

  @Put()
  update(@Body() produto: Produto) {
    return this.produtoService.update(produto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.produtoService.delete(id);
  }
}