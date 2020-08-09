import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminwork',
  templateUrl: './adminwork.component.html',
  styleUrls: ['./adminwork.component.css']
})
export class AdminworkComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout()
  {
    localStorage.setItem('adminallow','false');
    this.router.navigate(['firstpage']);
  }

}
