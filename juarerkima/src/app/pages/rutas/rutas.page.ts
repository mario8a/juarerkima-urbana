import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.page.html',
  styleUrls: ['./rutas.page.scss'],
})
export class RutasPage implements OnInit {

  componentes: Componente[] = [];

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  toogleMenu() {
    this.menuCtrl.toggle()
  }

}
