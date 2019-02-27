import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { Role } from '../../domain/role';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-role-home',
  templateUrl: './role-home.component.html',
  styleUrls: ['./role-home.component.css']
})
export class RoleHomeComponent implements OnInit {

  cols: any[];

  roles: Role[];

  loading = false;

  constructor(private roleService: RoleService, private confirmationService: ConfirmationService, private messageService: MessageService) {
    this.cols = [
      { field: 'name', header: 'Name', width: '20%' },
      { field: 'description', header: 'Description', width: '15%' }
    ];
  }

  ngOnInit() {
    this.loadRoles();
  }

  loadRoles() {
    this.roleService.getRoles().subscribe(roles => this.roles = roles);
  }

  confirmRoleDeletion(roleName: string) {
    this.confirmationService.confirm({
      message: `Do you want to delete role ${roleName}?`,
      accept: () => {
        this.deleteRole(roleName);
      },
      reject: () => {

      }
    });
  }

  deleteRole(roleName: string) {
    this.roleService.deleteRole(roleName).subscribe(response => {
      this.loadRoles();
      this.messageService.add({
        severity: 'success', summary: 'Success',
        detail: `Role with name ${roleName} has been deleted.`
      });
    });
  }

}
