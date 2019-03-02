import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuheroesComponent } from './components/menuheroes/menuheroes.component';
// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
const routes: Routes = [
  { path: 'heroes', component: MenuheroesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
