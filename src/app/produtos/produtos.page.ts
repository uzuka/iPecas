import { ProductService } from './../models-services/product-service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './../models-services/Produto.models';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  titulo = 'Produtos';
  listaProdutos: Produto[];

  constructor(private productService: ProductService) {
      this.listaProdutos = this.productService.getProdutos();
    }

  ngOnInit() {
  }

}
