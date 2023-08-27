import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home/home.module';
import { LoginComponent } from './login/login.component';
import { ToastrModule, IndividualConfig } from 'ngx-toastr';
import { LayoutModule } from "./layout/layout.module";
//import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


// Configure the toastr options
const toastrConfig: Partial<IndividualConfig> = {
  timeOut: 1500,
  positionClass: 'toast-bottom-center',
  tapToDismiss: true,
  toastClass: 'custom-toast',
};

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        HomeComponent,
        LoginComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        //NgMultiSelectDropDownModule.forRoot(),
        BrowserAnimationsModule,
        ToastrModule.forRoot(toastrConfig),
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        HomeModule,
        LayoutModule,
        
    ]
})
export class AppModule {}
