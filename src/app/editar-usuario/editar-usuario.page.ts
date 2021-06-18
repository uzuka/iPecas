import { UserService } from './../models-services/user-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../models-services/Usuario.models';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.page.html',
  styleUrls: ['./editar-usuario.page.scss'],

})
export class EditarUsuarioPage implements OnInit {

  id = 0;
  usuario : Usuario = null;

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) {}

    ngOnInit() {
      this.id = Number (this.route.snapshot.paramMap.get('id'));
      this.userService.getUsuario(String(this.id)).subscribe(usuario =>{
        this.usuario = usuario
        if(this.usuario == null){
          this.router.navigate(['']);
        }
      });
    }

    onSubmit(form: any) {
      this.usuario.nome = form.value.nome;
      this.usuario.email = form.value.email;
      this.usuario.endereco = form.value.endereco;
      this.usuario.imagem = form.value.imagem;

      this.userService.atualizarUsuario(this.id, this.usuario).subscribe(()=>{
        this.router.navigate(['/usuarios']);
      });
    }

    excluir(id :  number){
      this.userService.excluirUsuario(id).subscribe(() =>{
        this.router.navigate(['/usuarios']);
      })
    }
}








