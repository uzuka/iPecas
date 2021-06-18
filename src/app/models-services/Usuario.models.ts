export class Usuario {
  id: number;
  nome: string;
  email: string;
  endereco: string;
  imagem: string;

  constructor(id: number, nome: string, email: string, endereco: string, imagem: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.endereco = endereco;
    this.imagem = imagem;
  }
}
