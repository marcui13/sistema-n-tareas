import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { AgregarTareaComponent } from './components/agregar-tarea/agregar-tarea.component';
import { EditarTareaComponent } from './components/editar-tarea/editar-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTareasComponent,
    AgregarTareaComponent,
    EditarTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
