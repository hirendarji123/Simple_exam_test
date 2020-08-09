import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from'@angular/forms';
import { Router } from '@angular/router';
import {Registrationdata} from '../registrationdata';
import {QuestionService} from '../question.service';
import { from } from 'rxjs';
import { isNull } from 'util';
@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent implements OnInit {

  show: boolean;
  user;
  email;
  

  form :FormGroup;
  registrationdata = new Registrationdata();

  constructor(private router :Router,private q:QuestionService){}
   
  ngOnInit(): void {
      this.form =new FormGroup ( {
        name :new FormControl('',[Validators.required]),
        email : new FormControl('',[Validators.required,Validators.email]),
        username :new FormControl('',[Validators.required]),
        password :new FormControl('',[Validators.required,Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/)]),
        confirm_password :new FormControl('',[Validators.required,Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/)]),
      });
    
    }
    onItemChange(value){
      console.log(" Value is : ", value );
      this.user=false;
      
      
      this.q.getStudentByUsername(value).subscribe(res=>{
        console.log(res);
        this.user=res;
        console.log(this.user.length);
        
        if(this.user.length>0)
        {
          console.log("if");
          this.user=true;
        }
        else
        {
          console.log("else");
          this.user=false  ; 
        }
      });
    }

    
    emailcheck(value)
    {
      this.email=false;
      console.log(value);
      this.q.getemail(value).subscribe(res=>{
        console.log(res);

        let data:any =res
        console.log(data.length);
        
        if(data.length>0)
        {
          console.log("if");
          this.email=true;
        }
        else
        {
          console.log("else");
          this.email=false  ; 
        }

      })
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
