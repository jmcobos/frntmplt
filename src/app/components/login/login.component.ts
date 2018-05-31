import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre: string;
  password: string;
  showErrorPassword = true;
  showErrorNombre = true;

  constructor(private usuario: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    localStorage.removeItem('currentUser');
    this.usuario.logearse(this.nombre, this.password).subscribe(
      (response: any) => {
        localStorage.setItem('currentUser', JSON.stringify({ 'usuario': this.nombre, 'token': response.token }));
        this.router.navigate(['/inicio']);
      },
      (error: any) => {
        this.password = '';
        switch (error.status) {
          case 401: {
            this.showErrorPassword = true;
            this.showErrorNombre = false;
            break;
          }
          case 404: {
            this.showErrorPassword = false;
            this.showErrorNombre = true;
            break;
          }
          default: {
            this.showErrorPassword = false;
            this.showErrorNombre = false;
            this.router.navigate(['/error']);
            break;
          }
        }
      });
  }

}
