import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from "./home/alunos.component";
import { CursoComponent } from './home/curso.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'curso',
    component: CursoComponent
  },
  {
    path:'alunos',
    component: AlunosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }