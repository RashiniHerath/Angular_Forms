import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  topics =['Angular','React','Vue']; //property

  userModel = new User('Rob','Johnson@gmail.com', 7708909786, 'Angular', 'Morning', true);//class instance
}
