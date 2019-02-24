import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../domain/user';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  cols: any[];

  users: User[];

  loading = false;

  constructor(
    private userService: UserService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.cols = [
      { field: 'login', header: 'Login', width: '10%' },
      { field: 'name', header: 'Name', width: '20%' },
      { field: 'email', header: 'Email', width: '15%' }
    ];
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loading = false;
    });
  }

  confirmUserDeletion(userLogin: string) {
    this.confirmationService.confirm({
      message: `Do you want to delete user ${userLogin}?`,
      accept: () => {
        this.deleteUser(userLogin);
      },
      reject: () => {}
    });
  }

  deleteUser(userLogin: string) {
    this.userService.deleteUser(userLogin).subscribe(response => {
      this.loadUsers();
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: `User with login ${userLogin} has been deleted.`
      });
    });
  }
}
