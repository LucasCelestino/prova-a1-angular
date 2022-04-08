import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { LucasCelestinoComponent } from '../lucas-celestino/lucas-celestino.component';
import { HomeComponent } from '../home/home.component';
import { LucasCelestinoListaComponent } from '../lucas-celestino-lista/lucas-celestino-lista.component';
import { LucasCelestinoDisciplinasService } from '../lucas-celestino-disciplinas.service';
import { DisciplinaDetailComponent } from '../disciplina-detail/disciplina-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'meus-dados', component: LucasCelestinoComponent },
      { path: 'lista-disciplinas', component: LucasCelestinoListaComponent },
      { path: 'lista-disciplinas/:id', component: DisciplinaDetailComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LucasCelestinoComponent,
    LucasCelestinoListaComponent,
    DisciplinaDetailComponent,
  ],
  bootstrap: [AppComponent],
  providers: [LucasCelestinoDisciplinasService],
})
export class AppModule {}
