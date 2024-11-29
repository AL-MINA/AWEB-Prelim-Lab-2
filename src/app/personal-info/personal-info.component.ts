import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  fullName: string = 'Almina Tanglao';
  profession: string = 'Web Developer';
  contactNo: string = '09695674925';
  email: string = 'tanglaoalmina11@gmail.com';
  birthday: string = 'October 11, 2003';
  age: string = '21 years old';
  gender: string = 'Female';

}
