import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceDataService } from 'src/app/service-data.service';
import { formatDate } from '@angular/common';
import {AngularFireStorage} from '@angular/fire/compat/storage'
import { trigger, transition, style, animate, animation } from '@angular/animations';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
  animations:[
    trigger('tabFade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),

  ]
  
})

export class MyProfileComponent implements OnInit {

  basic_info_data: boolean = true;
  other_info_data: boolean = false;
  selecteddImage: any;

  selectedTab: 'basic' | 'other' = 'basic';

  basic_info_tab() {
    this.selectedTab = 'basic';
    this.basic_info_data = true;
    this.other_info_data = false;
  }
  
  other_info_tab() {
    this.other_info_data = true;
    this.basic_info_data = false;
    this.selectedTab = 'other';
  }

  updatedUserData:any={}
  
  dob = '';
  editedDob = '';
  

  gender = '';
  editedGender = '';
  


  blood='';
  editedBloodValue = '';



  emergencyNumber='';
  editedEmergencyNumberValue = '';
  
  religion='';
  editedReligionValue = '';

  fatherName='';
  editedFatherNameValue='';

  fatherDob='';
  editedFatherDobValue='';

  fatherOccupation='';
  editedFatherOccupationValue='';

  motherName='';
  editedMotherNameValue='';

  motherDob='';
  editedMotherDobValue='';

  motherOccupation='';
  editedMotherOccupationValue='';

  maritalStatus='';
  editedMaritalStatusValue=''
  
  marriageDate='';
  editedMarriageDateValue='';

  spouseName='';
  editedSpouseNameValue='';

  firstChildDob='';
  editedFirchildDobValue=''

  secondChildName='';
  editedSecondChildNameValue='';

  secondChildDob='';
  editedSecondChildDobValue='';

  thirdChildName='';
  editedThirdChildNameValue=''

  thirdChildDob='';
  editedThirdChildDobValue='';

  editMode:boolean=false;
  editImg=true

  contactNumber='';
  editedContactNumberValue = '';


  selectedGender!: string; 
  selectedBlood!:string;
  selectedReligion!:string;
  genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'others', label: 'Others' }
  ];



  bloodOptions = [
    { value: 'o+ve', label: 'O+ve' },
    { value: 'a+ve', label: 'A+ve' },
    { value: 'b+ve', label: 'B+ve' },
    { value: 'ab+ve', label: 'AB+ve' },
    { value: 'o-ve', label: 'O-ve' },
    { value: 'a-ve', label: 'A-ve' },
    { value: 'b-ve', label: 'B-ve' },
    { value: 'ab-ve', label: 'AB-ve' }
  ];
  

  religionOptions = [
    { value: 'hindu', label: 'Hindu' },
    { value: 'cristian', label: 'Cristian' },
    { value: 'muslim', label: 'Muslim' },
  ];



  totalData={}
  toggleEditImg(){
    this.editImg=false
  }

  toggleEdit() {
    
    console.log(this.updatedUserData.dob);
    
    

    
    this.editMode = !this.editMode;
    
    if (this.editMode) {  
      this.editedEmergencyNumberValue=this.updatedUserData.emergencyNumber;
      // this.selectedGender = this.updatedUserData.gender;
      this.editedContactNumberValue = this.updatedUserData.contactNumber;
      this.editedFatherNameValue=this.updatedUserData.fatherName;
      this.editedFatherDobValue=this.updatedUserData.fatherDob
      this.editedFatherOccupationValue=this.updatedUserData.fatherOccupation;

      this.editedMotherNameValue=this.updatedUserData.motherName
      this.editedMotherDobValue=this.updatedUserData.motherDob
      this.editedMotherOccupationValue=this.updatedUserData.motherOccupation

      this.editedMaritalStatusValue=this.updatedUserData.maritalStatus
      this.editedMarriageDateValue=this.updatedUserData.marriageDate
      this.editedSpouseNameValue=this.updatedUserData.spouseName
      //this.editedBloodValue=this.updatedUserData.blood;
    
      this.editedThirdChildNameValue=this.updatedUserData.thirdChildName;
      this.editedThirdChildDobValue=this.updatedUserData.thirdChildDob;
      this.editedSecondChildDobValue=this.updatedUserData.secondChildDob;
      this.editedFirchildDobValue=this.updatedUserData.firstChildDob;
      this.editedDob=this.updatedUserData.dob 
      
      
  } else {
    //this.selectedGender=this.editedGender
      this.contactNumber = this.editedContactNumberValue;
      this.emergencyNumber=this.editedEmergencyNumberValue;
      this.fatherName=this.editedFatherNameValue;
      this.fatherDob=this.editedFatherDobValue;
      this.fatherOccupation=this.editedFatherOccupationValue;


      this.motherName=this.editedMotherNameValue;
      this.motherDob=this.editedMotherDobValue;
      this.motherOccupation=this.editedMotherOccupationValue

      this.maritalStatus=this.editedMaritalStatusValue
      this.marriageDate=this.editedMarriageDateValue
      this.spouseName=this.editedSpouseNameValue
      this.secondChildName=this.editedSecondChildNameValue

      this.firstChildDob=this.editedFirchildDobValue
      this.secondChildDob=this.editedSecondChildDobValue
      this.thirdChildDob=this.editedThirdChildDobValue
      this.thirdChildName=this.editedThirdChildNameValue

      //this.blood=this.editedBloodValue;
      this.dob=this.editedDob;
      
      
      const thirdChildDob=new Date(this.thirdChildDob)
      const unixThirdchildDob=thirdChildDob.getTime()
      const secondChildDob=new Date(this.secondChildDob);
      const unixSecondDob=secondChildDob.getTime();
      const firstChildDob=new Date(this.firstChildDob);
      const unixFirstChildDob=firstChildDob.getTime()
      const dobDate = new Date(this.dob);
      const dobUnixTimestamp = dobDate.getTime();
      const fatherDob = new Date(this.fatherDob);
      const fatherUnixTimestamp = fatherDob.getTime();
      const motherDob=new Date(this.motherDob)
      const unixMotherDob=motherDob.getTime()
      const marriageDate=new Date(this.marriageDate)
      const unixMarriageDate=marriageDate.getTime()
      this.totalData = {
          contactNumber: this.contactNumber,
          emergencyNumber:this.emergencyNumber,
          blood:this.selectedBlood,
          religion:this.selectedReligion,
          gender: this.selectedGender,
          dob: dobUnixTimestamp,
          fatherName:this.fatherName,
          fatherDob:fatherUnixTimestamp,
          fatherOccupation:this.fatherOccupation,
          motherName:this.motherName,
          motherDob:unixMotherDob,
          motherOccupation:this.motherOccupation,
          maritalStatus:this.maritalStatus,
          spouseName:this.spouseName,
          secondChildName:this.secondChildName,
          marriageDate:unixMarriageDate,
          firstChildDob:unixFirstChildDob,
          secondChildDob:unixSecondDob,
          thirdChildDob:unixThirdchildDob,
          thirdChildName:this.thirdChildName
      };
  }

        this.dob = this.editedDob;
        
        

console.log(this.totalData);

this.profileData.updateProfileData(this.totalData)
  .subscribe(
    (response: any) => {
      console.log('Profile data updated successfully:', response);
    },
    (error: any) => {
      console.error('Error updating profile data:', error);
    }
  );





    
}
  myProfileData: any = "";
  Id: any;
  otherData: any;

  constructor(private http:HttpClient, private profileData: ServiceDataService, private fireStorage:AngularFireStorage) {
    
  }

  ngOnInit(): void {
   this.profileData.subData().subscribe((data:any)=>{
    
    this.myProfileData=data.data[0]
    console.log("gggggggggggg",this.myProfileData);
    
   });
   
   this.base64Image = localStorage.getItem('profilePic');



   


   this.profileData.getBasicInfo().subscribe((res:any)=>{
  
    this.updatedUserData=res.data[0];
    console.log("response data",this.updatedUserData);
    
    
  })
  }


  selctedImg: boolean = false;
  base64Image: string | null = null;
  
  async onImageSelected(event: any) {
    this.base64Image = null; 
    const selectedImage: File = event.target.files[0];

    if (selectedImage) {
      const path = `lms-img/${selectedImage.name}`;

      try {
        const upload = await this.fireStorage.upload(path, selectedImage);
        const url = await upload.ref.getDownloadURL();
        console.log("download url", url);

        this.base64Image = url;
        this.profileData.uploadImg(this.base64Image).subscribe({
          next:(res:any)=>{
            console.log(res);
            
          }
        })
        localStorage.setItem("profilePic",this.base64Image)
      } catch (error) {
        console.log("Error uploading image:", error);
      }
    }
   
   
  }

  toggleEditt() {
    this.editImg = !this.editImg;
  }

  

   

}