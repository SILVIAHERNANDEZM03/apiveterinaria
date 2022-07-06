import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientesMascotasPageRoutingModule } from './pacientes-mascotas-routing.module';

import { PacientesMascotasPage } from './pacientes-mascotas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientesMascotasPageRoutingModule
  ],
  declarations: [PacientesMascotasPage]
})
export class PacientesMascotasPageModule {}
