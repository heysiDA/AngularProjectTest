import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuheroesComponent } from './components/menuheroes/menuheroes.component';
import { DashboardComponent }   from 'src/app/pages/dashboard/dashboard.component';
import { HeroeDetailComponent }  from 'src/app/pages/heroe-detail/heroe-detail.component';
// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
const routes: Routes = [
  { path: 'heroes', component: MenuheroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:name', component: HeroeDetailComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
