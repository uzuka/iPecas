import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../models-services/product-service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.page.html',
  styleUrls: ['./editar-produto.page.scss'],
})
  export class EditarProdutoPage implements OnInit {

  id = 0;
  produto: any;

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = Number (this.route.snapshot.paramMap.get('id'));
    this.produto = this.productService.getProduto(this.id);
    if(this.produto == null){
      this.router.navigate(['']);
    }
  }

  onSubmit(form: any) {
    // eslint-disable-next-line prefer-const
    let nome = form.value.nome;
    // eslint-disable-next-line prefer-const
    let descricao = form.value.descricao;
    // eslint-disable-next-line prefer-const
    let preco = Number(form.value.preco);
    // eslint-disable-next-line prefer-const
    let imagem = form.value.imagem;
    this.productService.atualizarProduto(this.id, nome, descricao, preco, imagem);
    this.router.navigate(['/produtos']);
  }
}
