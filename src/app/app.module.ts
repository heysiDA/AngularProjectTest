import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { MessageService, MessageModule, CardModule, ConfirmDialogModule, ConfirmationService, TooltipModule, InputTextModule, ListboxModule, PickListModule } from 'primeng/primeng';
import { RoleHomeComponent } from './pages/role-home/role-home.component';
import { TableModule } from 'primeng/table';
import { UserService } from './services/user.service';
import { RoleService } from './services/role.service';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { RoleDetailsComponent } from './pages/role-details/role-details.component';
import { RoleAddComponent } from './pages/role-add/role-add.component';
import { UserAddComponent } from './pages/user-add/user-add.component';
import { ToastModule } from 'primeng/toast';//para utilizar las funcionalidades q existen para el form
//FormsModule es el q me permite usar el [(ngModule)]
import { MenuheroesComponent } from './components/menuheroes/menuheroes.component';
import { HeroeDetailComponent } from './pages/heroe-detail/heroe-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
//import {AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AutocompleteComboComponent } from './components/autocomplete-combo/autocomplete-combo.component';
import { CountryDescriptionComponent } from './components/country-description/country-description.component';
import { CountryNewsComponent } from './components/country-news/country-news.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';

//parte del tutorial
import {DataService} from './serviceTest/data.service';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes =[
  {path: '',component:HolaMundoComponent},
  {path: 'about',component:AboutComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    MenuComponent,
    RoleHomeComponent,
    UserDetailsComponent,
    RoleDetailsComponent,
    RoleAddComponent,
    UserAddComponent,
    MenuheroesComponent,
    HeroeDetailComponent,
    MessagesComponent,
    DashboardComponent,
    AutocompleteComboComponent,
    CountryDescriptionComponent,
    CountryNewsComponent,
    HolaMundoComponent,
    UserComponent,
    //parte del tutorial
    AboutComponent
      
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    MenuModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    HttpClientModule,
    MessageModule,
    TableModule,
    CardModule,
    ConfirmDialogModule,
    ToastModule,
    TooltipModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ListboxModule,
    PickListModule,
    AutoCompleteModule,
    //parte del tutorial
    RouterModule.forRoot(routes),
  ],
  providers: [UserService, RoleService, MessageService, ConfirmationService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
