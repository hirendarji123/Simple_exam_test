import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from'@angular/forms';
import { Router } from '@angular/router';
import {Registrationdata} from '../registrationdata';
import {QuestionService} from '../question.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent implements OnInit {

  show: boolean;

  form :FormGroup;
  registrationdata = new Registrationdata();

  constructor(private router :Router,private q:QuestionService){}
   
  ngOnInit(): void {
      this.form =new FormGroup ( {
        name :new FormControl('',[Validators.required]),
        email : new FormControl('',[Validators.required,Validators.email]),
        username :new FormControl('',[Validators.required]),
        password :new FormControl('',[Validators.required,Validators.minLength(3)]),
        confirm_password :new FormControl('',[Validators.required,Validators.minLength(3)]),
      });
     // this.httpservices.getdata();
    }
  
    onsubmit()
    {
      this.registrationdata =this.form.value;
     
      if( this.form.get('password').value == this.form.get('confirm_password').value )
        {
         
          //console.log(this.registrationdata);
        alert("sucessfully registion");
        this.form.reset();
        this.q.registrationofStudent(this.registrationdata).subscribe(res=>{
          console.log("return data ");
          console.log(res);
        });
        this.router.navigate(['/adminwork']);
        }
        else{
                this.show = true;
        }
      }
  

}
