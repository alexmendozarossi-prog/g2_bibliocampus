import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  nombre:string = 'Alex Mendoza R.';
  rol:string = 'ESTUDIANTE';
}
