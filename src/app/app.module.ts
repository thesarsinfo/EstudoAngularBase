import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Componente/home/home.component';
import { LateralComponent } from './Componente/lateral/lateral.component';
import { PipePipe } from './pipelegal/pipe.pipe';
import { DuasviasComponent } from './Componente/duasvias/duasvias.component';
import { ListasComponent } from './Componente/listas/listas.component';
import { CompPersonalizadoComponent } from './Componente/comp-personalizado/comp-personalizado.component';
import { PaiComponent } from './Componente/pai/pai.component';
import { FilhoComponent } from './Componente/filho/filho.component';
import { ServicosexemploComponent } from './Componente/servicosexemplo/servicosexemplo.component';
import { ServicosexemploDoisComponent } from './Componente/servicosexemplo-dois/servicosexemplo-dois.component';
import { CicloVidaComponent } from './Componente/ciclo-vida/ciclo-vida.component';
import { CicloVidaPaiComponent } from './Componente/ciclo-vida-pai/ciclo-vida-pai.component';
import { CardComponent } from './Componente/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LateralComponent,
    PipePipe,
    DuasviasComponent,
    ListasComponent,
    CompPersonalizadoComponent,
    PaiComponent,
    FilhoComponent,
    ServicosexemploComponent,
    ServicosexemploDoisComponent,
    CicloVidaComponent,
    CicloVidaPaiComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
