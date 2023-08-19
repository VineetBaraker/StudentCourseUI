import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css'],
})
export class StudentdetailComponent {
  StudentArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  studentName: string = '';
  course: string = '';

  currentStudentID = '';

  constructor(private http: HttpClient) {
    this.getAllStudent();
  }

  ngOnInit(): void {}

  getAllStudent() {
    this.http
      .get('https://localhost:7041/api/Students')
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData);
        this.StudentArray = resultData;
      });
  }

  register() {
    let bodyData = {
      studentname: this.studentName,
      course: this.course,
    };

    this.http
      .post('https://localhost:7041/api/Students', bodyData)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Student Registered Successfully');
        this.getAllStudent();
      });
  }

  setUpdate(data: any) {
    this.studentName = data.studentname;
    this.course = data.course;

    this.currentStudentID = data.id;
  }

  UpdateRecords() {
    let bodyData = {
      studentname: this.studentName,
      course: this.course,
    };

    this.http
      .patch(
        'https://localhost:7041/api/Students' + '/' + this.currentStudentID,
        bodyData
      )
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Student Registered Updated');
        this.getAllStudent();
      });
  }

  save() {
    if (this.currentStudentID == '') {
      this.register();
    } else {
      this.UpdateRecords();
    }
  }

  setDelete(data: any) {
    this.http
      .delete('https://localhost:7041/api/Students' + '/' + data.id)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Student Delete');
        this.getAllStudent();
      });
  }
}
