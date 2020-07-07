import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  student()
  {
    console.log("student login");
    this.router.navigate(['login']);
  }

  admin()
  {
    console.log("admin login");
    this.router.navigate(['adminlogin']); 
  }

}
