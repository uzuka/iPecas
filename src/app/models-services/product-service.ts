import { Injectable } from '@angular/core';
import { Produto } from './Produto.models';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3000/produtos";

  maxID : number = 0;

  constructor(private http: HttpClient) {}

  getProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl);
  }

  getProduto(id : number) : Observable<Produto>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Produto>(url);
  }

  criarProduto(nome: string, descricao: string, preco: number, imagem: string) : Observable<Produto>{
    let produto = new Produto(this.maxID, nome, descricao, preco, imagem)
    return this.http.post<Produto>(this.baseUrl, produto)
  }

  atualizarProduto(id: number, produto : Produto) : Observable<Produto>{
    const url = `${this.baseUrl}/${id}`
    return this.http.put<Produto>(url, produto)
  }

  excluirProduto(id : number) : Observable<Produto>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Produto>(url)
  }
}
