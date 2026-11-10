import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-libro-card',
  styleUrl: './libro-card.css',
  templateUrl: './libro-card.html',
})
export class LibroCard {
  protected titulo:string = "Clean Code";
  protected autor:string = "Robert C. Martin";
  protected anio:number = 2008;
  protected categoria:string = "Buenas Prácticas";
  protected copias = signal(3);

  // protected mostrarInfo(){
  //   return this.titulo + " - " + this.autor;     METODO DE PRUEBA
  // }

  //Señales para signal
  protected agotado = computed(()=> this.copias() === 0);
  protected etiqueta = computed(()=>
      this.agotado() ? 'Agotado' :
          `Disponible - ${this.copias()} ${this.copias() === 1 ? 'copia': 'copias'}  `
  );

  //DISMINUIR LAS COPIAS POR EL PRESTAMO - AL PRESIONAR EL BOTON:
  protected alSolicitar():void {
    this.copias.update((c) => c - 1); //EVENTOS --- AL HACER CLICK -- REVISA EL HTML
  }

  

}