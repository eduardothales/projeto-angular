import { Component, Input, OnInit } from '@angular/core';
import {Curso} from './curso'

@Component({
  selector: 'spa-curso',
  templateUrl: './curso.component.html',
})

export class CursoComponent implements OnInit {

  cursos: Curso[] = [];


  ngOnInit(): void {
    this.cursos = [
      {id:111,
        name:'SPA',
        descricao:'TESTE'
      },
      {id:222,
        name:'PHP',
        descricao:'TESTE'
      }
    ]
  }
}



