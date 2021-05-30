import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Lista de Produtos', url: './produtos', icon: 'storefront' },
    { title: 'Lista de Usuários', url: '/usuarios', icon: 'person' },
    { title: 'Desenvolvedores', url: '/desenvolvedores', icon: 'code' },
  ];
  constructor() {}
}
