import { Component, OnInit } from '@angular/core';

import {Registrationdata} from '../registrationdata';
import { Router } from '@angular/router';
import {QuestionService} from '../question.service';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {
  showdata:any;

  constructor(private router:Router,private q:QuestionService) { }

  ngOnInit(): void {
    this.q.getallstudent().subscribe(res=>
      {
        this.showdata = res as Registrationdata[];
        console.log( this.showdata);
      });
  }

  delete1(id)
  {
    console.log(id);
    this.q.deleteStudent(id).subscribe(res=>
      {
        console.log("delete sucess");
        this.q.getallstudent().subscribe(res=>
          {
            this.showdata = res as Registrationdata[];
            //console.log( this.showdata);
          });
        this.router.navigate(['/showstudent']);
      })
    }



}
