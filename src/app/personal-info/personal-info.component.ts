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

}
