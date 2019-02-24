import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { RoleHomeComponent } from './pages/role-home/role-home.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserAddComponent } from './pages/user-add/user-add.component';
import { RoleDetailsComponent } from './pages/role-details/role-details.component';
import { RoleAddComponent } from './pages/role-add/role-add.component';
import { UserResolver } from './resolvers/user.resolver';

const routes: Routes = [
  {
    path: 'users',
    data: {
      title: 'Users'
    },
    component: UserHomeComponent
  },
  {
    path: 'users/:login/details',
    data: {
      title: 'User details'
    },
    component: UserDetailsComponent,
    resolve: {
      user: UserResolver
    }
  },
  {
    path: 'users/:login/edit',
    data: {
      title: 'User edit',
      newRecord: 'false'
    },
    component: UserAddComponent,
    resolve: {
      user: UserResolver
    }
  },
  {
    path: 'users/add',
    data: {
      title: 'New user',
      newRecord: 'true'
    },
    component: UserAddComponent
  },
  {
    path: 'roles',
    data: {
      title: 'Roles'
    },
    component: RoleHomeComponent
  },
  {
    path: 'roles/:name/details',
    data: {
      title: 'Role details'
    },
    component: RoleDetailsComponent
  },
  {
    path: 'roles/:name/edit',
    data: {
      title: 'Role edit'
    },
    component: RoleAddComponent
  },
  {
    path: 'roles/add',
    data: {
      title: 'New role'
    },
    component: RoleAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
