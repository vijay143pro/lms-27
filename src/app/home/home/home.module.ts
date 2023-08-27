import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from 'src/app/layout/layout.module';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLeaveComponent } from 'src/app/layout/apply-leave/apply-leave.component';
import { MyProfileComponent } from 'src/app/layout/my-profile/my-profile.component (1)';
import { HomeComponent } from '../home.component';
import { MatListModule } from '@angular/material/list';
import { AugustaFamilyComponent } from 'src/app/layout/augusta-family/augusta-family.component';
import { AugustaHolidayComponent } from 'src/app/layout/augusta-holiday/augusta-holiday.component';
import { LeaveRequestComponent } from 'src/app/layout/leave-request/leave-request.component';
import { ChangePasswordComponent } from 'src/app/layout/change-password/change-password.component';
import { MyLeavesComponent } from 'src/app/layout/my-leaves/my-leaves.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'apply-leave',
        component: ApplyLeaveComponent,
      },
      {
        path:'my-leaves',
        component:MyLeavesComponent
      },
      {
        path: 'my-profile',
        component: MyProfileComponent,
      },
      {
        path:'augusta-family',
        component:AugustaFamilyComponent
      },
      {
        path:'augusta-holiday',
        component:AugustaHolidayComponent
      },
      {
        path:'leave-request',
        component:LeaveRequestComponent
      },
      {
        path:'change-password',
        component:ChangePasswordComponent
      }
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    LayoutModule,
    RouterModule.forRoot(routes),
    
    MatListModule
  ],
  exports: [MatSidenavModule, LayoutModule, RouterModule],
})
export class HomeModule {}
