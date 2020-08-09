import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  baseURL = 'http://localhost:3000/';
  baseURLOfUser = 'http://localhost:3000/student/';
  

  

  selectedquestion;
  totalNOofqueston;
  selecteddata;

  private subject = new Subject<any>();
  
  constructor( private http:HttpClient) { }


  //-------------------for question-----------
        getQuestion()
        {
          return this.http.get(this.baseURL);
        }

        getQuestionByNO(no)
        {
          return this.http.get(this.baseURL+no).subscribe(res=>
          {
            console.log(res);
            this.selecteddata=res;
            this.subject.next(res);
          });
        }

        getClickEvent(): Observable<any>{ 
          return this.subject.asObservable();
        } 
        

      passdatatoHOmecomponent()
      {
      
        return this.selecteddata;
      }

      deleteQuestioBYNO(no)
      {
        return this.http.delete(this.baseURL+no);
      }

      pushQustion(data)
      {
       
        return this.http.post(this.baseURL,data);
      }

//-----------------------for student----------------------------

getallstudent()
{
  
 return this.http.get(this.baseURLOfUser+'/all');
}

getStudentByUsername(username)
{
  return this.http.get(this.baseURLOfUser+username);

}


registrationofStudent(data)
{
return this.http.post(this.baseURLOfUser,data);

}

deleteStudent(username)
{

  return this.http.delete(this.baseURLOfUser+username);
}

baseURLOfUseremail = 'http://localhost:3000/student/emails/';
getemail(email)
{ 

  return this.http.get(this.baseURLOfUseremail+email);
  console.log("hii "+"hello")
}

}