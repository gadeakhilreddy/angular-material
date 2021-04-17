import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {


  @Input()
  courses: Course[];

  constructor() { }

  ngOnInit(): void {
  }

}
