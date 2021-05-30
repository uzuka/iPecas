import { Injectable } from '@angular/core';
import { Produto } from './Produto.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private produtos: Produto[];

  constructor() {
    this.produtos = [
      // eslint-disable-next-line max-len
      new Produto('Blend', 'Ceramic & Carnaúba', 1,'https://scontent.fppy1-1.fna.fbcdn.net/v/t1.6435-9/183735647_3867268273326911_1032529378958771985_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=DjBbjQyGSw4AX-h0Xws&_nc_ht=scontent.fppy1-1.fna&oh=645bbc5026595c730a504593c8fef3eb&oe=60D692AA'),
      // eslint-disable-next-line max-len
      new Produto('Kit Limpa-Carro','Contém Blend, Espuma, Vonixx, etc', 2, 'https://scontent.fppy1-1.fna.fbcdn.net/v/t1.6435-9/183795126_3867268066660265_5010412798198069833_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=2Jo9yFs51tgAX9jUoHc&_nc_ht=scontent.fppy1-1.fna&oh=7cc3566f2b3ddae432e13391f968f10d&oe=60D80A71'),
      // eslint-disable-next-line max-len
      new Produto('Cremecar','Shampoo de pH neutro e muito viscoso, que por sua vez reduz o atrito superficial entre a luva e a superfície na ser limpa.', 3, 'https://scontent.fppy1-1.fna.fbcdn.net/v/t1.6435-9/178731326_3647621598681532_5848219381835755966_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=_XeEOOxU67QAX-foeEI&_nc_ht=scontent.fppy1-1.fna&oh=7ea4356ed1c94f4815aeeb3e16a04353&oe=60D966F5')
    ];
  }

  getProdutos(){
    return this.produtos;
  }

  getProduto(i: number){
    return this.produtos[i];
  }

  criarProduto(nome: string, descricao: string, preco: number, imagem: string){
    this.produtos.push(new Produto(nome, descricao, preco, imagem));
  }

  atualizarProduto(i: number, nome: string, descricao: string, preco: number, imagem: string){
    this.produtos[i].nome = nome;
    this.produtos[i].descricao = descricao;
    this.produtos[i].preco = preco;
    this.produtos[i].imagem = imagem;
  }
}
