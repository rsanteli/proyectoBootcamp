import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicio/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: any;
  usuarioAagregar = {name:'', username:'', email:''};

  constructor(private uService: UsuariosService) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(){
    this.uService.listarUsuarios().subscribe({
      next: (r) => this.usuarios = r,
      error: (e) => console.log(JSON.stringify(e))
    })
  }


  eliminarUsuario(id_usuario:string) {
    console.log("Se ha eliminado el usuario " + id_usuario);
  }
  nuevoUsuario() {
    console.log("Se ha añadido un nuevo usuario: " + this.usuarioAagregar.name);
  }
}
