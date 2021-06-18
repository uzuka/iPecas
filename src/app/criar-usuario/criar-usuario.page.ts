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
    public router: Router,
    ) {}

  onSubmit(form: any) {
    let nome : string = form.value.nome;
    let email : string = form.value.email;
    let endereco : string = form.value.endereco;
    let imagem : string = form.value.imagem;

    this.userService.criarUsuario(nome, email, endereco, imagem).subscribe(() =>{
      this.router.navigate(['/usuarios']);
    });
  }

  ngOnInit() {}
}
