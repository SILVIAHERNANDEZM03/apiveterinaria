import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {NavController, NavParams} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {HTTPResponse} from '@awesome-cordova-plugins/http';
import {HttpClientJsonpModule} from '@angular/common/http';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.page.html',
  styleUrls: ['./persona.page.scss'],
})
export class PersonaPage implements OnInit {

  veterinaria: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {
    this.veterinaria = this.httpClient.get('https://veterinaria.pythonanywhere.com/vet/Persona');
  }

  openDetails(veterinaria) {
    //this.navCtrl.push('PersonamDetailsPage', {film: film});

  }

  ngOnInit() {

  }
}

