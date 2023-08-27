import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceDataService } from 'src/app/service-data.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  public form_data_1: FormGroup;
 

  constructor(private fb: FormBuilder, private toastr: ToastrService,private  getDataService: ServiceDataService) {
    this.form_data_1 = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$')]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.matchPassword });
  }
  
  matchPassword(group: AbstractControl): ValidationErrors | null {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    if (newPassword !== confirmPassword) {
      return { passwordMismatch: true };
    }

    return null;
  }

  changePassword() {
    if (this.form_data_1.valid) {
      this.getDataService.changePass(this.form_data_1.value).subscribe({
        next:(res:any)=>{
          console.log("res from change password",res);
          this.toastr.success('Password changed successfully');  
        },
        error:(err:any)=>{
          console.log("res err",err);
          this.toastr.error("Something went wrong in change password")
        }
      })
    } else {
      // Handle form validation errors here
    }
  }
}




