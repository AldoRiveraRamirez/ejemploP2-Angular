import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from '../validators/primeraLetraMayuscula';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  form:FormGroup;

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      nombre: ['', {
        validators:[Validators.required, Validators.minLength(3), primeraLetraMayuscula()]
      }],
      password: ['', {
        validators:[Validators.required]
      }]
    })
  }
  guardarUsuario(){
    console.log('Registro Guardado');
  }
  obtenerErrorCampos(){
    var nom=this.form.get('nombre');
    
    if(nom.hasError('required')){
      return 'El campo Nombre es requerido';
    }
    if(nom.hasError('primeraLetraMayuscula')){
      return nom.getError('primeraLetraMayuscula').mensaje;
    }
    if(nom.hasError('minlength')){
      return 'La longitud minima es de 3 caracteres';
    }
    
  } 
  obtenerErrorCamposP(){
    var pass=this.form.get('password');
    if(pass.hasError('required')){
      return 'El campo Password es requerido';
    }
  }

}
