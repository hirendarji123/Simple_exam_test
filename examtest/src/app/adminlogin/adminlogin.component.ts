import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from'@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  error;
  forms :FormGroup;

  constructor(private router:Router){}
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

        if("hiren" == username && 123 == password)
            {
              this.router.navigate(['adminwork'])
            }
    }

}
