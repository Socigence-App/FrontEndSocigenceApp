import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCategoriaComponent } from './crear-categoria/crear-categoria.component';
import { CrearEjerciciosComponent } from './crear-ejercicios/crear-ejercicios.component';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { CrearRecompensaComponent } from './crear-recompensa/crear-recompensa.component';
import { CrearRetosComponent } from './crear-retos/crear-retos.component';
import { CrearSolucionComponent } from './crear-solucion/crear-solucion.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { EditarEjercicioComponent } from './editar-ejercicio/editar-ejercicio.component';
import { EditarPublicacionComponent } from './editar-publicacion/editar-publicacion.component';
import { EditarRetoComponent } from './editar-reto/editar-reto.component';
import { EditarSolucionComponent } from './editar-solucion/editar-solucion.component';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PerfilAdmiComponent } from './perfil-admi/perfil-admi.component';
import { PerfilAnalisisComponent } from './perfil-analisis/perfil-analisis.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { VerCategoriasAdmiComponent } from './ver-categorias-admi/ver-categorias-admi.component';
import { VerCategoriasComponent } from './ver-categorias/ver-categorias.component';
import { VerEjerciciosComponent } from './ver-ejercicios/ver-ejercicios.component';
import { VerPublicacionesAdmiComponent } from './ver-publicaciones-admi/ver-publicaciones-admi.component';
import { VerPublicacionesComponent } from './ver-publicaciones/ver-publicaciones.component';
import { VerRecompensasAdmiComponent } from './ver-recompensas-admi/ver-recompensas-admi.component';
import { VerRecompensasComponent } from './ver-recompensas/ver-recompensas.component';
import { VerRetosAdmiComponent } from './ver-retos-admi/ver-retos-admi.component';
import { VerRetosComponent } from './ver-retos/ver-retos.component';
import { VerSolucionesComponent } from './ver-soluciones/ver-soluciones.component';
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
  {path: 'usuarios', component: VerUsuariosComponent},
  {path: 'recompensas', component: VerRecompensasComponent},
  {path: 'crearRecompensa', component: CrearRecompensaComponent},
  {path: 'editarPost', component: EditarPublicacionComponent},
  {path: 'publicacionesAdmi', component: VerPublicacionesAdmiComponent},
  {path: 'categoriasAdmi', component: VerCategoriasAdmiComponent},
  {path: 'editarCategoria', component: EditarCategoriaComponent},
  {path: 'retosAdmi', component: VerRetosAdmiComponent},
  {path: 'editarReto', component: EditarRetoComponent},
  {path: 'recompensasAdmi', component: VerRecompensasAdmiComponent},
  {path: 'editarUsuario', component: EditarUsuariosComponent},
  {path: 'perfilAnalisis', component: PerfilAnalisisComponent},
  {path: 'verEjercicios', component: VerEjerciciosComponent},
  {path: 'editarEjercicio', component: EditarEjercicioComponent},
  {path: 'crearEjercicio', component: CrearEjerciciosComponent},
  {path: 'verSoluciones', component: VerSolucionesComponent},
  {path: 'editarSolucion', component: EditarSolucionComponent},
  {path: 'crearSolucion', component: CrearSolucionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
