import { Component } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';
import { UtlService } from '../services/utl.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

 /*  alumnosUtl: AlumnosUtl[] = [

    {
      nom: 'Mario',
      edad: 23
    },
    {
      nom: 'Veronica',
      edad: 33
    },
    {
      nom: 'Luisa',
      edad: 19
    },
  ];
*/

  regAlum: AlumnosUtl = {
    nom: '',
    edad: 0  } 
  constructor() {}

  /* agregarNuevoAlumno(argumento: AlumnosUtl) {
    this.alumnosUtl.push(argumento);
    /* this.UtlServices.muestra(); */
  /* } */ 
}


