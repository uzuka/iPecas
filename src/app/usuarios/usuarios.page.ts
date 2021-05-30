import { Component, OnInit } from '@angular/core';
import { Usuario } from './../models-services/Usuario.models';
import { UserService } from './../models-services/user-service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  titulo = 'Usuários';
  listaUsuarios: Usuario[];

  constructor(private userService: UserService) {
    this.listaUsuarios = this.userService.getProdutos();
  }

  ngOnInit() {
  }
}
