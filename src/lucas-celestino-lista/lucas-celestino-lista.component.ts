import { Component, OnInit } from '@angular/core';
import { disciplinasJson } from '../Disciplinas';

@Component({
  selector: 'app-lucas-celestino-lista',
  templateUrl: './lucas-celestino-lista.component.html',
  styleUrls: ['./lucas-celestino-lista.component.css'],
})
export class LucasCelestinoListaComponent implements OnInit {
  disciplinas = disciplinasJson;

  constructor() {
    console.log(this.disciplinas);
  }

  ngOnInit() {}
}
