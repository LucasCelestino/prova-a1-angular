import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { disciplinasJson } from '../Disciplinas';

@Component({
  selector: 'app-disciplina-detail',
  templateUrl: './disciplina-detail.component.html',
  styleUrls: ['./disciplina-detail.component.css'],
})
export class DisciplinaDetailComponent implements OnInit {
  singleDisciplina;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.singleDisciplina = disciplinasJson[params.get('id')];

      console.log(this.singleDisciplina);
    });
  }
}
