import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
  // Es recomendable que se la propiedad se declare de tipo private
  constructor (private dbzService : DbzService) {

 }

 get characters() : Character[] {
  return [...this.dbzService.characters] // esto crea una copia del arreglo, por lo que si se modifica el objeto, no afectara al objeto inicial
 }

 onDeleteCharacter (id :string) : void {
  this.dbzService.deleteCharacterById(id);
 }

 OnNewCharacter(character : Character) : void {
  this.dbzService.addCharacter(character);
 }
}
