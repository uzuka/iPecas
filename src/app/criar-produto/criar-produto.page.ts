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
    public router: Router) { }

  onSubmit(form: any) {
    let nome = '';
    let descricao = '';
    let preco = 0;
    let imagem = '';

    nome = form.value.nome;
    descricao = form.value.descricao;
    preco = Number(form.value.preco);
    imagem = form.value.imagem;

    this.productService.criarProduto(nome, descricao, preco, imagem);
    this.router.navigate(['/produtos']);
  }

  ngOnInit() {
  }
}
