import { outputAst } from '@angular/compiler';
import { EventEmitter, Output,  } from '@angular/core';
import { MainPageComponent } from '../main-page/main-page.component';


import { Component, Input } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';
import { UtlService } from '../services/utl.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {


  //@Input() alumnosUtl:AlumnosUtl[]=[]; //usarlo en los componentes que queramos 
  @Input() regAlum: AlumnosUtl = {
    nom: '',
    edad: 0
  }; //usarlo en los componentes que queramos  

  constructor(private utlservices: UtlService) {
  }
  // @Output () OnNuevoAlumno: EventEmitter<AlumnosUtl>= new EventEmitter();
  agregar(): void {
    console.log(this.regAlum);
    //this.OnNuevoAlumno.emit(this.regAlum);
    //this.alumnosUtl.push(this.regAlum);
    this.utlservices.agregarNuevoAlumno(this.regAlum);
    this.regAlum = {
      nom: '',
      edad: 0
    };
  }
}