import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Heysi Despa';
  age: number = 25;
//  address:{
//    street:string;
//    city:string;
//  };
//  hobbies:string[];

//  constructor() { 
//    this.age = 25;
//    this.address = {
//      street : 'Romay 57',
//      city : 'La Habana'
//    };
//    this.hobbies = ['read','run','jump'];
//    }
users:string[] = ['ryen','heysi','tete'];
sayHello(){
  alert('Hello heysi!');
}
DeleteUser(user){
  for(let i = 0; i< this.users.length;i++){
      if(user == this.users[i]){
        this.users.splice(i,1);
      }
  }
}
addUser(newUserInput){//lo q se en via es el input y no el valor
  this.users.push(newUserInput.value);//asi se optiene el valor del Input
  newUserInput.value = '';
  newUserInput.focus();
  return false;// se retorna false para cancelar el evento de resetear el form una vez q se de clic al button
}
}
