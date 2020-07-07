import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {QuestionService} from '../question.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.css']
})
export class DeleteQuestionComponent implements OnInit {

  constructor( private q:QuestionService,private router:Router) { }

  ngOnInit(): void {
  }
  submit(f:NgForm)
  {
    
    let no=f.controls['QuestionNO'].value;
    console.log(no)
    this.q.deleteQuestioBYNO(no).subscribe(res=>
      {
        console.log(res)
      })
      this.q.getQuestion().subscribe(res=>{
        console
        .log(res);
      });
      //this.router.navigate(['homepage']);
      this.router.navigate(['adminwork']);
  
  }

}
