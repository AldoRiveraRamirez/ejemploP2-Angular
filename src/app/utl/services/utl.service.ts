import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';

@Injectable({
  providedIn: 'root'
})
export class UtlService {

    private _alumnosUtl: AlumnosUtl[] = [

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

  get alumnos():AlumnosUtl[]{
    return [...this._alumnosUtl]
  }



  constructor() { }
  agregarNuevoAlumno(mario: AlumnosUtl) {
    this._alumnosUtl.push(mario);
     
   } 
  muestra(){
    console.log('nombre');
  }
}
