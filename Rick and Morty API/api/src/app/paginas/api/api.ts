import { Component } from '@angular/core';
import { Dataservice } from '../../services/dataservice';
import {CommonModule, NgForOf } from "@angular/common";

@Component({
  imports: [CommonModule, NgForOf],
  selector: 'app-api',
  styleUrl: './api.css',
  templateUrl: './api.html',
})
export class Api {

  eliminarPersonaje(personaje: any) {
  personaje.eliminado = true;
}

  personajes: any[] = [];

  constructor(private dataservice: Dataservice) {
  this.cargarPersonajes();
  }
  

  cargarPersonajes() {
    this.dataservice.obtenerPersonajes().subscribe((data: any) => {
      console.log(data);
      this.personajes = data.results;
    });
  }

}
