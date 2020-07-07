import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {QuestionService} from '../question.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit { 

  constructor( private q:QuestionService,private router:Router) 
  {
   }

  ngOnInit(): void {
  }
  submit(f:NgForm)
  {
    console.log(f.value );
   this.q.pushQustion(f.value).subscribe(res=>
    {
      console.log(res);
      this.q.getQuestion().subscribe(res=>
        {
          console.log(res);
        });
    })
    this.router.navigate(['adminwork']);
  
  }

}
