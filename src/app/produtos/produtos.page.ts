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

  constructor(private productService: ProductService) {}

  ngOnInit() {}

  ionViewWillEnter(){
    this.productService.getProdutos().subscribe(produtos =>{
      this.listaProdutos = produtos
      this.productService.maxID = produtos[produtos.length-1].id+1
    })
  }
}
