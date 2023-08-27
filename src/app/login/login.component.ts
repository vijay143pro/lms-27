import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceDataService } from '../service-data.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public form_data_1: FormGroup;

  constructor(private fb: FormBuilder, private getDataService: ServiceDataService,private http:HttpClient, private toastr: ToastrService,private router:Router) {
    this.form_data_1 = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@augustahitech\\.com$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$')]]
    });
  }
  total:any={  
  }
  message:any=''
  id:any={}
  totalData:any={}
  data:any=''
  login(i: any) {
    
   //passing id to service file 
    this.getDataService.subData()
   
      

    this.http.post("http://localhost:3050/user/login", this.form_data_1.value).subscribe({
      next: (data: any) => {
        console.log(data);
        this.id = data.data.data._id;
        localStorage.setItem("userId",this.id)
        this.totalData=data.data.data
        this.message = data.message;
        this.toastr.success(this.message);
        setTimeout(() => {
          this.router.navigate(['/home'])
          //this.router.navigate(['/my-profile'], {queryParams: { id: this.id, otherData: JSON.stringify(this.totalData) } });
        }, 500);
      },
      error: (err) => {
        this.message = err.error.message;
        this.toastr.error(this.message);
      }
    });
  }
}
