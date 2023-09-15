import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocentePageRoutingModule } from './docente-routing.module';

import { DocentePage } from './docente.page';
import { CompartirModule } from '../compartir/compartir.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocentePageRoutingModule,
    CompartirModule
  ],
  declarations: [DocentePage]
})
export class DocentePageModule {}
