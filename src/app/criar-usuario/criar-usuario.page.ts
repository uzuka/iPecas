import { UserService } from './../models-services/user-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.page.html',
  styleUrls: ['./criar-usuario.page.scss'],
})
export class CriarUsuarioPage implements OnInit {

  constructor(private userService: UserService,
    public router: Router) { }

  onSubmit(form: any) {
    let nome = '';
    let email = '';
    let endereco = '';
    let imagem = '';

    nome = form.value.nome;
    email = form.value.email;
    endereco = form.value.endereco;
    imagem = form.value.imagem;

    this.userService.criarUsuario(nome, email, endereco, imagem);
    this.router.navigate(['/usuarios']);
  }

  ngOnInit() {
  }
}
