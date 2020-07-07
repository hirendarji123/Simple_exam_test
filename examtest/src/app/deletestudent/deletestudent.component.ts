import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {QuestionService} from '../question.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletestudent',
  templateUrl: './deletestudent.component.html',
  styleUrls: ['./deletestudent.component.css']
})
export class DeletestudentComponent implements OnInit {
  constructor( private q:QuestionService,private router:Router) { }

  ngOnInit(): void {
  }
  submit(f:NgForm)
  {
    
    let no=f.controls['username'].value;
    
    this.q.deleteStudent(no).subscribe(res=>
      {
        console.log(res)
      })
     
      //this.router.navigate(['homepage']);
      this.router.navigate(['adminwork']);
    }

}
