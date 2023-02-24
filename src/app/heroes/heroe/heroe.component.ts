import { Component } from '@angular/core';
@Component({
  selector: 'app-heroe',
  templateUrl: './hereo.component.html'

})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad  : number = 45;

  // es como si fuera un propiedad que va a ser procesada
  get nombreCapitalizado(): string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre():string {
    return `${this.nombre} - ${ this.edad }`;
  }

  cambiarNombre():void {
    this.nombre = 'Spiderman';
  }
  cambiarEdad(): void {
    this.edad = 50;
  }

}
