import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../models-services/Produto.models';
import { ProductService } from './../models-services/product-service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.page.html',
  styleUrls: ['./editar-produto.page.scss'],
})
  export class EditarProdutoPage implements OnInit {

  id = 0;

  produto : Produto = null

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = Number (this.route.snapshot.paramMap.get('id'));
    this.productService.getProduto(this.id).subscribe(produto => {
      this.produto = produto
      if(this.produto == null){
        this.router.navigate(['']);
      }
    });
  }

  onSubmit(form: any) {
    this.produto.nome = form.value.nome;
    this.produto.descricao = form.value.descricao;
    this.produto.preco = Number(form.value.preco);
    this.produto.imagem = form.value.imagem;

    this.productService.atualizarProduto(this.id, this.produto).subscribe(()=>{
      this.router.navigate(['/produtos']);
    });
  }

  excluir(id :  number){
    this.productService.excluirProduto(id).subscribe(() =>{
      this.router.navigate(['/produtos']);
    })
  }
}
