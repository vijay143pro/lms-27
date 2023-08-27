import { Injectable,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService{
  
  userId: any = "";
  userData: any = {};

  constructor(private http: HttpClient) {}
    
   subData(){
    this.userId=localStorage.getItem("userId")
    console.log(this.userId);
    return this.http.get(`http://localhost:3050/user/getUserById/${this.userId}`)
   }
   
   updateProfileData(data: any): Observable<any> {
    return this.http.put(`http://localhost:3050/basicInfo/editDetails/${this.userId}`, data);
  }

    getBasicInfo(){
      return this.http.get(`http://localhost:3050/basicInfo/getbasicInfoByUserId/${this.userId}`)
    }

    uploadImg( profile_image_url: string){
      return this.http.put(`http://localhost:3050/user/editUserDetails/${this.userId}`,profile_image_url)
    }

    search(){
      return this.http.get("http://localhost:3050/user/searchUser/h/0/200")
    }

    changePass(passData:any){
      return this.http.put(`http://localhost:3050/user/changePassword/${this.userId}`,passData)
    }
}
