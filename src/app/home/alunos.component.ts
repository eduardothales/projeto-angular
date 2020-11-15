import { Component, OnInit } from '@angular/core';
import { Alunos } from './alunos';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'spa-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})


export class AlunosComponent implements OnInit  {

  alunos: Alunos[] = [];
  ngOnInit(): void {
    this.alunos = [
      {
        nome: 'Carlos Henrique',
        email: 'carlos@email.com',
        curso: 'SPA'
      },
      {
        nome: 'João Manuel',
        email: 'joao@email.com',
        curso: 'PHP'
      }
    ];
  }
}

