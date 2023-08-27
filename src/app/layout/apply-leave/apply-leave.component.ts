import { Component, OnInit,Pipe,PipeTransform } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ServiceDataService } from 'src/app/service-data.service';



interface User {
  name: string;
}

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
// calender
  selected: Date | null = null;
  emptytoppingList = [/* your list of toppings */];



  durationDateName: string = '';


  selectedFrom:Date |null= null;
  selectedTo:Date |null= null;
  
  
  onStartDateChange(event: any) {
    this.selectedFrom = event.value;
    console.log('Selected start date:', this.selectedFrom);

  }
  
  onEndDateChange(event: any) {
    this.selectedTo = event.value;
    console.log('Selected end date:', this.selectedTo);
  }
  
  getFormattedDate(): string {
   
    
    return this.selected ? this.selected.toDateString() : new Date().toDateString();

  }

  dateRadioSelections: { [key: string]: string } = {}
  selectedOptions: User[] = [];

  myControl = new FormControl<string | User>('');
  options: User[] = [{ name: 'Loss of pay' }];
  filteredOptions: Observable<User[]> | undefined;

  myDurationControl = new FormControl<string | User>('');
  durationOptions: User[] = [{ name: 'Oneday' },{name:"more than oneday"}];
  durationFilteredOptions: Observable<User[]> | undefined;

  timeDiff:number=0
  emailForm!: FormGroup;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  resData: any = '';
  nameArray:any=[]
  giri:string=""
  krish:string=''
  ccArray: string[] = []; 
  toArray:string[]=[]
  constructor(private fb: FormBuilder, private searchUser:ServiceDataService) {}
 


  ngOnInit(): void {


    this.searchUser.search().subscribe({
      next: (res: any) => {
        this.resData = res.data;
        for (let i: any = 0; i < this.resData.length; i++) {
          this.nameArray.push(this.resData[i].name);
          this.toppingList.push(this.resData[i].name)
        }
        if (this.nameArray.includes('Giridharan V', 'V Krishna Kumar')) {
          this.giri = 'Giridharan V';
          this.krish='V Krishna Kumar'
        }
      },
      error(err: any) {
        console.log("error", err);
      }
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      })
    );

    this.durationFilteredOptions = this.myDurationControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const durationName = typeof value === 'string' || value === undefined ? value : value?.name;
    this.durationDateName = durationName ?? ''; // Assign a default value if durationName is undefined 
    return durationName ? this._durationFilter(durationName as string) : this.durationOptions.slice();

      })
    );

    
    this.emailForm = this.fb.group({
      to: [''],
      cc: [''],
      selectedRadioValue: ['']
    });
  }
  toppings1 = new FormControl(); 
  toppings2 = new FormControl();
  searchControl = new FormControl();
  toppingList: string[] = [];

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  durationDisplayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _durationFilter(name: string): User[] {
    const durationFilterValue = name.toLowerCase();
    return this.durationOptions.filter(option => option.name.toLowerCase().includes(durationFilterValue));
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }
  onRadioSelectionChange(date: Date, value: string) {
    const dateKey = date.toISOString(); 
    this.dateRadioSelections[dateKey] = value; 
  
   
    console.log(`${value} selected for date: ${date}`);
  }
  
  
  
  getDateRangeArray(startDate: Date, endDate: Date): Date[] {
    const dateArray: Date[] = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      dateArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dateArray;
  }

  submitForm(): void {
   
    
    const to = this.emailForm.value.to;
    const cc = this.emailForm.value.cc;
    if (cc && cc.trim() !== '') {
      this.ccArray.push(cc);
      this.emailForm.reset('');
    }
    if (to && to.trim() !== '') {
      this.toArray.push(to);
      console.log(`to Array: `, this.toArray);
      this.emailForm.reset('');
    }
    console.log(`Sending email to: ${to}`);
  }
  
  
}
