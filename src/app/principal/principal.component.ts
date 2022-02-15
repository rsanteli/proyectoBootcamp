import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  curso1:any = {nombre: "Beca Angular", descripcion: "Curso sobre Angular y Typescript", total_dias: 9};
  curso2:any = {nombre: "Beca Java", descripcion: "Formación sobre Java", total_dias: 10};
  contador:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  eventoBotonAngular():void{
    console.log("Ejecutamos el evento del botón para " + this.curso1.nombre + " " + this.curso1.descripcion);
  }
}
