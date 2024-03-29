import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';     

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

import {ListboxModule} from 'primeng/listbox';

import {EditorModule} from 'primeng/editor';

import {HttpClientModule } from '@angular/common/http';


import { RegistroComponent } from './registro/registro.component';
import { MenuDesplegableComponent } from './menu-desplegable/menu-desplegable.component';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { HomeComponent } from './home/home.component';
import { VerPublicacionesComponent } from './ver-publicaciones/ver-publicaciones.component';
import { CrearCategoriaComponent } from './crear-categoria/crear-categoria.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilAdmiComponent } from './perfil-admi/perfil-admi.component';
import { MenuDesplegableAdmiComponent } from './menu-desplegable-admi/menu-desplegable-admi.component';
import { CrearRetosComponent } from './crear-retos/crear-retos.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { VerCategoriasComponent } from './ver-categorias/ver-categorias.component';
import { VerRetosComponent } from './ver-retos/ver-retos.component';
import { RetoComponent } from './reto/reto.component';
import { VerUsuariosComponent } from './ver-usuarios/ver-usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RecompensaComponent } from './recompensa/recompensa.component';
import { VerRecompensasComponent } from './ver-recompensas/ver-recompensas.component';
import { CrearRecompensaComponent } from './crear-recompensa/crear-recompensa.component';
import { EditarPublicacionComponent } from './editar-publicacion/editar-publicacion.component';
import { PublicacionAdmiComponent } from './publicacion-admi/publicacion-admi.component';
import { VerPublicacionesAdmiComponent } from './ver-publicaciones-admi/ver-publicaciones-admi.component';
import { VerCategoriasAdmiComponent } from './ver-categorias-admi/ver-categorias-admi.component';
import { CategoriaAdmiComponent } from './categoria-admi/categoria-admi.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { RetoAdmiComponent } from './reto-admi/reto-admi.component';
import { VerRetosAdmiComponent } from './ver-retos-admi/ver-retos-admi.component';
import { EditarRetoComponent } from './editar-reto/editar-reto.component';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';
import { VerRecompensasAdmiComponent } from './ver-recompensas-admi/ver-recompensas-admi.component';
import { RecompensaAdmiComponent } from './recompensa-admi/recompensa-admi.component';
import { PerfilAnalisisComponent } from './perfil-analisis/perfil-analisis.component';
import { EjerciciosAnalisisComponent } from './ejercicios-analisis/ejercicios-analisis.component';
import { VerEjerciciosComponent } from './ver-ejercicios/ver-ejercicios.component';
import { MenuDesplegableAnalisisComponent } from './menu-desplegable-analisis/menu-desplegable-analisis.component';
import { CrearEjerciciosComponent } from './crear-ejercicios/crear-ejercicios.component';
import { EditarEjercicioComponent } from './editar-ejercicio/editar-ejercicio.component';
import { CrearSolucionComponent } from './crear-solucion/crear-solucion.component';
import { SolucionComponent } from './solucion/solucion.component';
import { VerSolucionesComponent } from './ver-soluciones/ver-soluciones.component';
import { EditarSolucionComponent } from './editar-solucion/editar-solucion.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MenuDesplegableComponent,
    CrearPublicacionComponent,
    HomeComponent,
    VerPublicacionesComponent,
    CrearCategoriaComponent,
    PerfilComponent,
    PerfilAdmiComponent,
    MenuDesplegableAdmiComponent,
    CrearRetosComponent,
    PublicacionComponent,
    CategoriaComponent,
    VerCategoriasComponent,
    VerRetosComponent,
    RetoComponent,
    VerUsuariosComponent,
    UsuarioComponent,
    RecompensaComponent,
    VerRecompensasComponent,
    CrearRecompensaComponent,
    EditarPublicacionComponent,
    PublicacionAdmiComponent,
    VerPublicacionesAdmiComponent,
    VerCategoriasAdmiComponent,
    CategoriaAdmiComponent,
    EditarCategoriaComponent,
    RetoAdmiComponent,
    VerRetosAdmiComponent,
    EditarRetoComponent,
    EditarUsuariosComponent,
    VerRecompensasAdmiComponent,
    RecompensaAdmiComponent,
    PerfilAnalisisComponent,
    EjerciciosAnalisisComponent,
    VerEjerciciosComponent,
    MenuDesplegableAnalisisComponent,
    CrearEjerciciosComponent,
    EditarEjercicioComponent,
    CrearSolucionComponent,
    SolucionComponent,
    VerSolucionesComponent,
    EditarSolucionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    AccordionModule,
    EditorModule,
    MatCardModule,
    HttpClientModule,
    ListboxModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
