import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-pacientes-mascotas',
  templateUrl: './pacientes-mascotas.page.html',
  styleUrls: ['./pacientes-mascotas.page.scss'],
})
export class PacientesMascotasPage implements OnInit {
  veterinaria: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.veterinaria = this.navParams.get('veterinaria');
  }

  ngOnInit() {
  }

}
