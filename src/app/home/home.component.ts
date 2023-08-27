import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceDataService } from '../service-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Id: any;
  otherData: any;

  constructor(
    private route: ActivatedRoute,
    private otherService: ServiceDataService
  ) {}

  ngOnInit(): void {
   
    // this.route.queryParams.subscribe((params: any) => {
    //   this.Id = params.id;

    //   if (params.otherData) {
    //     try {
    //       this.otherData = JSON.parse(params.otherData);
    //       console.log(this.otherData);
    //       this.otherService.setData(this.otherData);
    //     } catch (error) {
    //       console.error('Error parsing otherData:', error);
    //     }
    //   } else {
    //     console.warn('otherData not provided.');
    //   }
    // });
  }
}
