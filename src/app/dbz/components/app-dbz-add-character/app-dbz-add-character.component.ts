import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-dbz-character',
  templateUrl: './app-dbz-add-character.component.html',
  styleUrls: ['./app-dbz-add-character.component.css']
})
export class AddDbzCharacterComponent {

  //Propiedad que sirve para "emitor" el character al main page.
  @Output()
  public onNewCharacter : EventEmitter<Character> = new EventEmitter();

  // Propiedad con valores default
  public character : Character = {
    name :'',
    power : 0
  }

  emitCharacter() : void {

    //debugger; // Se agrega para detener la ejecucion y poder revisar los valores de los elementos
    console.log(this.character);

    //Si el length es 0, entonces no hacer nada
    if (this.character.name.length === 0)
      return;

     const newCharacter : Character = {
       name : this.character.name,
       power : this.character.power
     };

    this.onNewCharacter.emit(newCharacter);


    this.character.name = '';
    this.character.power = 0;
  }
}
