import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../question.service';

import {Data} from '../data';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  question;
  lastquestion;
  questioNO;
  getquestionArr=[];
  showdata:any=[];
  answer;
  staring:boolean=true;
  answeSheet=[];
  yourAnswershhet;
  obj={};
  questionlist=[];
  selectedQuestion=1;
  finalanswersheet;
  showprevious;

  constructor(private  q:QuestionService,private router:Router) 
  {

    this.q.getClickEvent().subscribe(res=>
      {
        this.staring=false;
        console.log(this.staring);
        this.getquestionArr =[];

        console.log(res);
        this.showdata=res;
        this.getdata(); 
        
      });

  }
  

  ngOnInit(): void {


    this.q.getQuestion().subscribe(res=>{
      
      console.log(res['answer'][0]['answer']); 
      this.finalanswersheet =res['answer'];
      this.showdata=res['qiestionlist'] as Data[];
      this.lastquestion=this.showdata.length;
      for (let i = 0; i < this.lastquestion; i++) {
        let x=i;
        this.questionlist.push(++x);
      }
      console.log(this.lastquestion);
      console.log("in getdatatoshow",this.showdata);
      this.q.totalNOofqueston=this.showdata.length;
      if(this.staring == true)
      {
            this.getdata();
        }
      });
 }

 getdata()
 {
  for(let c in this.showdata[0])
  {
    if(c == 'Question')
    {
      this.question =this.showdata[0]['Question'];
    }
  else if(c== 'QuestionNO' )
  {
      this.questioNO=this.showdata[0]['QuestionNO'];
  }
  else if( c== '_id' || c=='__v')
  {
    continue;
  }
  else
    {
      this.getquestionArr.push(this.showdata[0][c]);
    }
  }
 }

onItemChange(value){
  //console.log(" Value is : ", value );
  this.answer=value;
}

save()
{
  console.log("your ans is:-"+this.answer);
  let qNO = this.questioNO;
  this.obj[qNO]=this.answer;
   console.log(this.obj);
   this.next();
}

submitTEst()
{
  this.yourAnswershhet=this.obj;
 //  console.log("final ans"+this.yourAnswershhet);
  let result=0;
  for(let i in this.obj)
  {
   
    let x= parseInt(i);
    x--;
  
    if(this.obj[i]==this.finalanswersheet[x]['answer'])
    {
      result++;
      
    }
  }
 
  
  alert("your result"+result);
  this.router.navigate(['login'])
  
}

next()
{
  if(this.selectedQuestion< this.lastquestion)
{

this.selectedQuestion++;
this.questionNO(this.selectedQuestion);
}
}

previous()
{

  this.selectedQuestion--;

if(this.selectedQuestion<=0)
{
  this.selectedQuestion=1;
  //  this.questionNO(this.selectedQuestion);
}
else
{ 
  this.questionNO(this.selectedQuestion);
}
  
}


questionNO(x)
{
  this.selectedQuestion=x;
  console.log(this.selectedQuestion);
  this.q.getQuestionByNO(x);
}


}
