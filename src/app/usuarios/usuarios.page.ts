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
  listaUsuarios : Usuario[];

  constructor(private userService : UserService) {}

  ngOnInit() {}

  ionViewWillEnter(){
    this.userService.getUsuarios().subscribe(usuarios =>{
    this.listaUsuarios = usuarios
    this.userService.maxID = usuarios[usuarios.length-1].id+1
    })
  }
}
