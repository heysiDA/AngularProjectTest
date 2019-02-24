import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/domain/user';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MessageService } from 'primeng/api';
import { Role } from 'src/app/domain/role';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  user: User;
  title: string;
  isNewRecord = true;

  form: FormGroup;

  unselectedRoles = [];

  selectedRoles = [];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private roleService: RoleService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.form = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.route.data.subscribe((data: { user: User; title: string; newRecord: boolean }) => {
      this.user = data.user;
      this.title = data.title;

      if (this.user) {
        this.selectedRoles = this.user.roles;
        this.isNewRecord = false;
        this.form.patchValue(this.user);
        this.substractSelectedRolesToAllRolesList();
      }
    });

    this.roleService.getRoles().subscribe(roles => {
      this.unselectedRoles = roles;
      this.substractSelectedRolesToAllRolesList();
    });
  }
  substractSelectedRolesToAllRolesList(): any {
    if (this.selectedRoles.length > 0 && this.unselectedRoles.length > 0) {
      this.unselectedRoles = this.unselectedRoles.filter((el) => this.selectedRoles.indexOf(el) > 0);
    }
  }

  saveUser() {
    if (this.form.valid && !this.form.pristine) {
      if (this.user) {
        this.updateUser();
      } else {
        this.createUser();
      }
    }
  }

  createUser() {
    const user = this.form.value;
    user.roles = this.selectedRoles;
    this.userService.createUser(user).subscribe(result => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: `User with login ${result.login} has been created.`
      });
      this.router.navigate(['users', result.login, 'details']);
    });
  }

  updateUser() {
    const user = this.form.value;
    user.roles = this.selectedRoles;
    this.userService.updateUser(user).subscribe(result => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: `User with login ${result.login} has been updated.`
      });
      this.router.navigate(['users', result.login, 'details']);
    });
  }

  setFormAsTouched() {
    this.form.markAsDirty();
  }
}
