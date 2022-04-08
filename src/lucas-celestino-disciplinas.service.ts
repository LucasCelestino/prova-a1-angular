import { Injectable } from '@angular/core';
import { disciplinasJson } from './Disciplinas';

interface disciplinas {}

@Injectable()
export class LucasCelestinoDisciplinasService {
  disciplinas: Array<disciplinas> = disciplinasJson;

  constructor() {}

  // listar
  getAll() {
    return this.disciplinas;
  }

  // incluir
  create(nome: string, dia: string, horario: string, ementa: string) {
    this.disciplinas.push({ nome, dia, horario, ementa });
  }

  //excluir
  delete(index: number) {
    this.disciplinas.slice(index, 1);
  }
}
