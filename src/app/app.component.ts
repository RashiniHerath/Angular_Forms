import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  validateTopicPlaceholder() {
    throw new Error('Method not implemented.');
  }

  topics = ['Angular', 'React', 'Vue']; //property
  topicHasError = true;
  submitted=false;
  errorMsg='';

  userModel = new User('', 'Johnson@gmail.com', 7708909786, '', 'Morning', true); //class instance
  name: any;

  constructor(private _enrollmentService: EnrollmentService){}

  validateTopic(value: any) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
  onSubmit(){
    this.submitted=true;
    this. _enrollmentService.enroll(this.userModel)
    .subscribe
    ((data: any) => console.log("Data", data),
      (    error: any) => console.error("Error", error));


  }
}
