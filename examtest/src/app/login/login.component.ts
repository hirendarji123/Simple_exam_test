import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from'@angular/forms';
import { Router } from '@angular/router';
import{QuestionService} from '../question.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error;
  forms :FormGroup;
  

  constructor(private router:Router,private q:QuestionService){}
    ngOnInit(): void {
      this.forms =new FormGroup ( {
        username :new FormControl(''),
        password : new FormControl('')
      });
    }

    onsubmit()
    {
        console.log("username" + this.forms.controls['username'].value);
        console.log("password" + this.forms.get('password').value);
        
        var username = this.forms.get('username').value;
        var password = this.forms.get('password').value;
  
        this.q.getStudentByUsername(username).subscribe(res=>
          {
           
              if(res[0]['username'] == username && res[0]['password'] == password)
              {
                console.log("right user both are correct id and password");
              this.router.navigate(['/homepage']);
              
              }
              else
              {
                console.log("else in login")
                this.error=true;

              }
            
          });

    }
}
