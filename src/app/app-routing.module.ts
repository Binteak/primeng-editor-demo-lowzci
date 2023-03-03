import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplatesFillerComponent } from './templates-filler/templates-filler.component';
import { HeaderComponent } from './header/header.component';

import { AuthGuardService } from './services/auth-guard.service';
// import { AuthAdminService } from './services/auth-admin.service';

const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'templates-filler',
    component: TemplatesFillerComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
