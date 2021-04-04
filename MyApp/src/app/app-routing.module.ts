import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { VerPublicacionesComponent } from './ver-publicaciones/ver-publicaciones.component';


const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'crearPublicacion', component: CrearPublicacionComponent},
  {path: 'publicaciones', component: VerPublicacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
