import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCategoriaComponent } from './crear-categoria/crear-categoria.component';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { CrearRetosComponent } from './crear-retos/crear-retos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PerfilAdmiComponent } from './perfil-admi/perfil-admi.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { VerCategoriasComponent } from './ver-categorias/ver-categorias.component';
import { VerPublicacionesComponent } from './ver-publicaciones/ver-publicaciones.component';
import { VerRetosComponent } from './ver-retos/ver-retos.component';
import { VerUsuariosComponent } from './ver-usuarios/ver-usuarios.component';


const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'crearPublicacion', component: CrearPublicacionComponent},
  {path: 'publicaciones', component: VerPublicacionesComponent},
  {path: 'crearCategoria', component: CrearCategoriaComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'perfilAdmi', component: PerfilAdmiComponent},
  {path: 'crearReto', component: CrearRetosComponent},
  {path: 'categorias', component: VerCategoriasComponent},
  {path: 'retos', component: VerRetosComponent},
  {path: 'usuarios', component: VerUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
