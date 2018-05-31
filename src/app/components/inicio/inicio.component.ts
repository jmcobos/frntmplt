import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../../services/usuario/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuarios = [];
  mostrarPrivate = true;

  constructor(private usuario: UsuarioService) { }

  ngOnInit() {
    this.usuario.getUsuarios().subscribe(
      (response: any) => {
        this.usuarios = response;
        this.mostrarPrivate = false;
      },
      (error: any) => {
      });
  }

}
