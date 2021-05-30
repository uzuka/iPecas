export class Usuario {
  id?: number;
  nome: string;
  email: string;
  endereco: string;
  imagem: string;

  constructor(nome: string, email: string, endereco: string, imagem: string) {
    this.nome = nome;
    this.email = email;
    this.endereco = endereco;
    this.imagem = imagem;
  }
}
