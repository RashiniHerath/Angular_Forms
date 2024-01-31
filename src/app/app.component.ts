import { Component } from '@angular/core';
import { User } from './user';

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

  userModel = new User('', 'Johnson@gmail.com', 7708909786, '', 'Morning', true); //class instance
  name: any;

  validateTopic(value: any) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
}
