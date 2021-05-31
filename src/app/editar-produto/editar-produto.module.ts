import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarProdutoPageRoutingModule } from './editar-produto-routing.module';

import { EditarProdutoPage } from './editar-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarProdutoPageRoutingModule
  ],
  declarations: [EditarProdutoPage]
})
export class EditarProdutoPageModule {}
