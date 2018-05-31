import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const AppRoutes = RouterModule.forRoot(appRoutes, { enableTracing: true });
