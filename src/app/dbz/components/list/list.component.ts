import { Component, Input, EventEmitter,Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public deleteCharacter : EventEmitter<string> = new EventEmitter();


  // Se define la propiedad ibuto charcterList con valores default
  // El decorador input, es el que define que atributo va a recibir informacion del padre
  @Input()
  public charcterList : Character[] = [{
    name : 'Trunks',
    power : 10
  }
  ]

  onDeleteCharacter(id? : string) : void {
    // TODO emitir el id del personaje

    if (!id) return;

    console.log({id});


    this.deleteCharacter.emit(id);
  }
}
