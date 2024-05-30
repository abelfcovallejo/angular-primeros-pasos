import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddDbzCharacterComponent } from './components/app-dbz-add-character/app-dbz-add-character.component';


@NgModule({
  exports: [
    MainPageComponent,

  ],  // hace visible el modulo hacia el mundo exterior, sin esto, el modulo no puede ser usado
  declarations: [
    MainPageComponent,
    ListComponent,
    AddDbzCharacterComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
