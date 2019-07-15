import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 name:string = 'Heysi Desp A';
 age: number;
 address:{
   street:string;
   city:string;
 };
 hobbies:string[];

 constructor() { 
   this.age = 25;
   this.address = {
     street : 'Romay 57',
     city : 'La Habana'
   };
   this.hobbies = ['read','run','jump'];
   }
 
}
