import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
})
export class RegisterComponent {
  public form_component_1: boolean = true;
  public form_component_2: boolean = false;
  public err_message: any = '';
  public form_data_2: FormGroup;
  public form_data_1:FormGroup;
  public fill_all_data:any=""
  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder,private toastr: ToastrService) {
    this.form_data_2 = this.fb.group({
      empId: ['', Validators.required],
      team: ['', Validators.required],
      role: ['', Validators.required],
      date_of_joining: ['', Validators.required]
    });
    
 
    this.form_data_1=this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@augustahitech\\.com$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$')]]
    })
  }
 
  temp_val_1:any={}
  temp_val_2:any={}
  ngOnInit(): void {
        
        
  }
  total_data={}
  
  continue() {
    if (this.form_data_1.valid) {
      this.form_component_1 = false;
      this.form_component_2 = true; 
      this.temp_val_1=this.form_data_1.value 
    } 
    else{
      this.display_all_err()
    }
    
  }
  display_all_err(){
    this.fill_all_data="fill all data"
  }

  submit() {
    if (this.form_data_2.valid) {
      this.temp_val_2 = this.form_data_2.value;
      this.total_data = {
        ...this.temp_val_1,
        ...this.temp_val_2
      };
      
      
      console.log("total",this.total_data);
      this.toastr.success('Register Success !'); 
      this.http.post("http://localhost:3050/user/createUser", this.total_data, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain, */*'
        }
      }).subscribe(() => {
        this.router.navigate(['/login']);
      });

      this.err_message = '';
    } else {
      this.err_message = 'fill';
    }
  }

  back() {
    this.form_component_1 = true;
    this.form_component_2 = false;
  }

 
}


