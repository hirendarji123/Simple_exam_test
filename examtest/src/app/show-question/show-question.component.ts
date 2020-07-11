import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {QuestionService} from '../question.service';
import {Question} from '../question'
  

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.css']
})
export class ShowQuestionComponent implements OnInit {

  constructor(private router:Router,private q:QuestionService) { }

  showdata;
  ngOnInit(): void {
    this.q.getQuestion().subscribe(res=>
      {
        
        this.showdata = res['qiestionlist'] as Question[];
        //console.log( this.showdata);
      });
  }

  
  delete1(id)
  {

    this.q.deleteStudent(id).subscribe(res=>
      {
        
        this.q.deleteQuestioBYNO(id).subscribe(res=>
          {
            this.q.getQuestion().subscribe(res=>
              {
                
                this.showdata = res['qiestionlist'] as Question[];
                //console.log( this.showdata);
              });
          });
          
        this.router.navigate(['/showQuestion']);
      })
    }


}
