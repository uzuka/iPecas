import { Injectable } from '@angular/core';
import { Usuario } from './Usuario.models';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:3000/usuarios";

  maxID : number = 0;

  constructor(private http: HttpClient) {}

  getUsuarios() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl);
  }

  getUsuario(id : string) : Observable<Usuario>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Usuario>(url);
  }

  criarUsuario(nome: string, email: string, endereco: string, imagem: string) : Observable<Usuario>{
    let usuario = new Usuario(this.maxID, nome, email,endereco, imagem)
    return this.http.post<Usuario>(this.baseUrl, usuario)
  }

  atualizarUsuario(id: number, usuario : Usuario) : Observable<Usuario>{
    const url = `${this.baseUrl}/${id}`
    return this.http.put<Usuario>(url, usuario)
  }

  excluirUsuario(id : number) : Observable<Usuario>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Usuario>(url)
  }
}
