import { Component, OnInit } from '@angular/core';
import { ProductService } from './../models-services/product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.page.html',
  styleUrls: ['./criar-produto.page.scss'],
})
export class CriarProdutoPage implements OnInit {

  constructor(private productService: ProductService,
    public router: Router) {}

  onSubmit(form: any) {
    let nome : string = form.value.nome;
    let descricao : string = form.value.descricao;
    let preco : number = Number(form.value.preco);
    let imagem : string = form.value.imagem

    this.productService.criarProduto(nome, descricao, preco, imagem).subscribe(() =>{
      this.router.navigate(['/produtos']);
    });
  }

  ngOnInit() {}
}
