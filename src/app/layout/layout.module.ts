import { NgModule } from '@angular/core';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { MyProfileComponent } from './my-profile/my-profile.component (1)';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AugustaFamilyComponent } from './augusta-family/augusta-family.component';
import { AugustaHolidayComponent } from './augusta-holiday/augusta-holiday.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { MyLeavesComponent } from './my-leaves/my-leaves.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireStorageModule} from '@angular/fire/compat/storage'
import { environment } from 'src/environment/environment';
//import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { FilterPipe } from '../pipe'; // Import the custom filter pipe


import {  ReactiveFormsModule} from '@angular/forms';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { LogoutDialogComponent } from './logout-dialog-component/logout-dialog-component.component';




@NgModule({
  declarations: [
    ApplyLeaveComponent,
    FilterPipe,
    MyProfileComponent,
    SidebarComponent,
    AugustaFamilyComponent,
    AugustaHolidayComponent,
    ChangePasswordComponent,
    LeaveRequestComponent,
    MyLeavesComponent,
    LogoutDialogComponent,    
  ],
  imports: [
    MatButtonModule, MatDialogModule,
    MatRadioModule,
    MatNativeDateModule,
    MatCardModule,
    MatDatepickerModule,
    MatChipsModule,
    AsyncPipe,
    NgFor,
    MatAutocompleteModule,
    CommonModule,
    MatListModule,
    RouterLink,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  exports:[
    ApplyLeaveComponent,
    MyProfileComponent  ,  
    SidebarComponent,
    MatListModule,
    RouterLink,
    MatChipsModule
  ]
})
export class LayoutModule { }
