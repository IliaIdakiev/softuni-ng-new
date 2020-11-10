import { Component, Inject } from '@angular/core';
import { API_URL_TOKEN, MyService } from './providers';
import { environment } from '../environments/environment';
import { UserService } from './user.service';
import { IUser } from './interfaces/user';
const API_URL = environment.apiURL;

const users = [
  {
    firstName: 'First Name 1',
    lastName: 'Last Name 1',
    age: 31
  },
  {
    firstName: 'First Name 2',
    lastName: 'Last Name 2',
    age: 32
  },
  {
    firstName: 'First Name 3',
    lastName: 'Last Name 3',
    age: 33
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  users: IUser[] | null = null;

  welcomeMessage = 'Hello!';

  nameInputValue = 'TEST TEST';

  isVisible = false;

  data = {
    name: 'TEST'
  };

  nameInputBtnClickHandler(data: { inputEl: HTMLInputElement }): void {
    console.log(data.inputEl.value);
  }


  constructor(public userService: UserService) {
    userService.loadUsers().subscribe(u => { this.users = u; });
    // console.log(userService);
    // setTimeout(() => {
    //   // this.data.name = 'HELLO!';
    //   this.data = { name: 'HELLO!' };
    //   console.log('change!');
    //   // this.nameInputValue = 'BEST!';
    // }, 4000);
  }

  toggleHandler(): void {
    this.isVisible = !this.isVisible;
  }
}
