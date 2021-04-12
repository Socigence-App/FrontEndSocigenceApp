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
    CategoriaComponent
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
