import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  Details:any[]=[];

  constructor(private service:HttpService) { }

  ngOnInit(): void 
  {
    document.body.className="white";
    this.getDetails();
  }

  getDetails(){
    this.service.getValue().subscribe((result:any)=>{
       this.Details=result
     // console.log(result)
    })
  }
}
