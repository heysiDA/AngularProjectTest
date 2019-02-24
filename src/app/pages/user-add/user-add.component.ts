import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/domain/user';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  user: User;
  title: string;
  newRecord: boolean;

  form: FormGroup;

  cities: any[];

  selectedCity: any;

  selectedCities: any[];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.form = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  ngOnInit() {
    this.route.data.subscribe((data: { user: User; title: string; newRecord: boolean }) => {
      this.user = data.user;
      this.title = data.title;

      if (this.user) {
        this.form.patchValue(this.user);
      }
    });
  }

  saveUser() {
    if (this.user) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }

  createUser() {
    this.userService.createUser(this.form.value).subscribe(result => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: `User with login ${result.login} has been created.`
      });
      this.router.navigate(['users', result.login, 'details']);
    });
  }

  updateUser() {
    this.userService.updateUser(this.form.value).subscribe(result => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: `User with login ${result.login} has been updated.`
      });
      this.router.navigate(['users', result.login, 'details']);
    });
  }
}
