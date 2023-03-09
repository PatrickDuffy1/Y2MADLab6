import { Component, OnInit } from '@angular/core';
import { StudentService } from './Sevices/student.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'student-app';
  students:any[] = [];
  weather:any[] = [];
  temperature:any;

  ngOnInit(): void
  {
    this.service.getStudentData().subscribe((data)=>{
      this.students = data.students;
    });

    this.service.getWeatherData().subscribe((data)=>{
      this.weather = data.weather;
      this.temperature = data.main.temp;
    });
  }

  constructor(private service:StudentService){}
}
