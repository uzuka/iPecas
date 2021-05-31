import { UserService } from './../models-services/user-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.page.html',
  styleUrls: ['./editar-usuario.page.scss'],

})
export class EditarUsuarioPage implements OnInit {

  id = 0;
  usuario: any;

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit() {
      this.id = Number (this.route.snapshot.paramMap.get('id'));
      this.usuario = this.userService.getUsuario(this.id);
      if(this.usuario == null){
        this.router.navigate(['']);
      }
    }

    onSubmit(form: any) {
      // eslint-disable-next-line prefer-const
      let nome = form.value.nome;
      // eslint-disable-next-line prefer-const
      let email = form.value.email;
      // eslint-disable-next-line prefer-const
      let endereco = form.value.endereco;
      // eslint-disable-next-line prefer-const
      let imagem = form.value.imagem;
      this.userService.atualizarUsuario(this.id, nome, email, endereco, imagem);
      this.router.navigate(['/usuarios']);
    }
}








