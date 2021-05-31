import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'desenvolvedores',
    loadChildren: () => import('./desenvolvedores/desenvolvedores.module').then( m => m.DesenvolvedoresPageModule)
  },
  {
    path: 'criar-produto',
    loadChildren: () => import('./criar-produto/criar-produto.module').then( m => m.CriarProdutoPageModule)
  },
  {
    path: 'editar-produto/:id',
    loadChildren: () => import('./editar-produto/editar-produto.module').then( m => m.EditarProdutoPageModule)
  },
  {
    path: 'criar-usuario',
    loadChildren: () => import('./criar-usuario/criar-usuario.module').then( m => m.CriarUsuarioPageModule)
  },
  {
    path: 'editar-usuario/:id',
    loadChildren: () => import('./editar-usuario/editar-usuario.module').then( m => m.EditarUsuarioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
