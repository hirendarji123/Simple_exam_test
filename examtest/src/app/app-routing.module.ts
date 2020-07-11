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


const routes: Routes = [
  {path:'', redirectTo:'firstpage',pathMatch:'full'}
  ,
  {
    path:'homepage' ,component:HomepageComponent
  },
  {
    path:'addquestion',component:AddquestionComponent
  }
  ,
  {
    path:'delete',component:DeleteQuestionComponent
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
    path:'adminwork',component:AdminworkComponent
  }
  ,
  {
    path:'createStudent',component:CreatestudentComponent
  },
  {
    path:'deleteStudent',component:DeletestudentComponent
  }
  ,
  {
    path:'showstudent',component:ShowuserComponent
  },
  {
    path:'showQuestion',component:ShowQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
