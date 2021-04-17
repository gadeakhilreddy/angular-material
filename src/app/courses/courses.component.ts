import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  beginnersCourse: Course[];

  advancedCourse: Course[];

  constructor() { }

  ngOnInit() {
  }

}
