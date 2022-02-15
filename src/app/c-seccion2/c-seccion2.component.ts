import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-c-seccion2',
  templateUrl: './c-seccion2.component.html',
  styleUrls: ['./c-seccion2.component.css']
})
export class CSeccion2Component implements OnInit, OnChanges{

  formSeccion2:any;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formSeccion2 = new FormGroup({
      usuario: new FormControl('', (Validators.required)),
      comentario: new FormControl('', [Validators.required,
        Validators.minLength(10)])
      })
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.formSeccion2.get('usuario'));
  }
  
  get f() {return this.formSeccion2.controls;}

  get usuario() { return this.formSeccion2.get('usuario');}
  get comentario() { return this.formSeccion2.get('comentario');}

  escribirComentario() {
    console.log("El usuario " + this.formSeccion2.value.usuario + " ha escrito el comentario: " + this.formSeccion2.value.comentario);
  }
}
