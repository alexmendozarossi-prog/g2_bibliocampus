import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-libro-card',
  styleUrl: './libro-card.css',
  templateUrl: './libro-card.html',
})
export class LibroCard {
  titulo:string = "La ciudad de los perros";
  autor:string = "Mario Vargas Lloza";
  anio:number = 1985;
  categoria:string = "Obra Literaria";
  copias:number = 3;
}
