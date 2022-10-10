import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  data:any;
  Message:string="";
  num:number=0;
  count:number=1;
  backendResponse:string=""
  issubmitDissabled:boolean=true;
  constructor(private service:HttpService) { }

  ngOnInit(): void {
    document.body.className="white";
   
  }

  onClick(getRate:any,amount:any)
  {
    this.num=(this.num+amount.value)*66.0
    if(getRate.checked && this.count==1){
      this.Message=`You are transfering the amount INR${this.num}`;
      this.count=0;
    }
  }
  onSubmit(values:any){
    this.data=values
    this.service.setValue(this.data).subscribe((result:any)=>{
    console.log(result)
    this. issubmitDissabled=false;
    this.backendResponse=result
   })
      

  }

}
