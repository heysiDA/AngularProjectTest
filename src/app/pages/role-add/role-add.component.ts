import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/domain/role';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoleService } from 'src/app/services/role.service';
import { MessageService } from 'primeng/api';
import { error } from 'util';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.css']
})
export class RoleAddComponent implements OnInit {
  role: Role;
  title: string;

  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private roleService: RoleService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      description: ['']
    });
  }

  ngOnInit() {
    this.route.data.subscribe((data: { role: Role; title: string; newRecord: boolean }) => {
      this.role = data.role;
      this.title = data.title;

      if (this.role) {
        this.form.patchValue(this.role);
      }
    });
  }

  saveRole() {
    if (this.form.valid && !this.form.pristine) {
      if (this.role) {
        this.updateRole();
      } else {
        this.createRole();
      }
    }
  }

  createRole() {
    this.roleService.createRole(this.form.value).subscribe(result => {
      if (result) {
        this.router.navigate(['roles', result.name, 'details']);
      }
    });
  }

  updateRole() {
    this.roleService.updateRole(this.form.value).subscribe(result => {
      this.router.navigate(['roles', result.name, 'details']);
    });
  }
}
