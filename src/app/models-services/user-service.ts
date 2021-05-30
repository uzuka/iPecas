import { Injectable } from '@angular/core';
import { Usuario } from './Usuario.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usuarios: Usuario[];

  constructor() {
    this.usuarios = [
      // eslint-disable-next-line max-len
      new Usuario('Maria José', 'maria.josé@gmail.com', 'Rua Manoel da Costa Mendonça','http://www.escoladeimagem.com.br/wp-content/uploads/download-1.jpeg'),
      new Usuario('João Pedro', 'joao.pedro@gmail.com', 'Rua Praça João de Souza','https://img.ibxk.com.br/2019/02/17/17124052466014.jpg'),
      // eslint-disable-next-line max-len
      new Usuario('Sebastião Ribeiro', 'sebastiao.ribeiro@gmail.com', 'Rua Minas Gerais','https://engenharia360.com/wp-content/uploads/2019/05/esta-pessoa-nao-existe-engenharia360-4.png')
    ];
  }

  getProdutos(){
    return this.usuarios;
  }

  getProduto(i: number){
    return this.usuarios[i];
  }

  criarProduto(nome: string, email: string, endereco: string, imagem: string){
    this.usuarios.push(new Usuario(nome, email, endereco, imagem));
  }

  atualizarProduto(i: number, nome: string, email: string, endereco: string, imagem: string){
    this.usuarios[i].nome = nome;
    this.usuarios[i].email = email;
    this.usuarios[i].endereco = endereco;
    this.usuarios[i].imagem = imagem;
  }
}
