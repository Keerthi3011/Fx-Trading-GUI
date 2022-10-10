import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    document.body.className="bg_background";
  }
  OnBook(){
    this.router.navigate(['/book'])
  }

  OnPrint(){
    this.router.navigate(['/print'])
  }

  OnExit(){
    this.router.navigate(['/exit'])
  }
}
