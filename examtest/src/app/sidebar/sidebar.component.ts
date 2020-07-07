import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../question.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private q:QuestionService) { }
  questionlist=[1,2,3,4,5];
  totalquestion;
  

  ngOnInit(): void {}

}
