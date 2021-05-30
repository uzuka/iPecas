export class Produto {
  id?: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;

  constructor(nome: string, descricao: string, preco: number, imagem: string) {
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.imagem = imagem;
  }
}
