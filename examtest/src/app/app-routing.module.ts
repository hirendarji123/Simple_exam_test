import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminworkComponent } from './adminwork/adminwork.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { ShowQuestionComponent } from './show-question/show-question.component';
import {StuentauthGuard as authgaurd} from'./stuentauth.guard';
import {AdminauthGuard as admin} from './adminauth.guard';
import { from } from 'rxjs';



const routes: Routes = [
  {path:'', redirectTo:'firstpage',pathMatch:'full'}
  ,
  {
    path:'homepage' ,component:HomepageComponent,canActivate:[authgaurd]
  },
  {
    path:'addquestion',component:AddquestionComponent,canActivate:[admin]
  }
  ,
  {
    path:'delete',component:DeleteQuestionComponent,canActivate:[admin]
  }
  ,
  {
    path:'firstpage',component:FirstpageComponent
    
  }
  ,
  {
    path:'login',component:LoginComponent
  },
  {
    path:'adminlogin',component:AdminloginComponent
  },
  {
    path:'adminwork',component:AdminworkComponent,canActivate:[admin]
  }
  ,
  {
    path:'createStudent',component:CreatestudentComponent,canActivate:[admin]
  },
  {
    path:'deleteStudent',component:DeletestudentComponent,canActivate:[admin]
  }
  ,
  {
    path:'showstudent',component:ShowuserComponent,canActivate:[admin]
  },
  {
    path:'showQuestion',component:ShowQuestionComponent,canActivate:[admin]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
