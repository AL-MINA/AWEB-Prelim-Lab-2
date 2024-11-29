import { Component } from '@angular/core';

export interface Education {
  school: string;
  level: string;
  year: string;
  address: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})

export class EducationComponent {
   education: Education[] = [
    {
      school: 'Virgen Delos Remedios Elementary School',
      level: 'Elementary',
      year: '2010 - 2016',
      address: '68 Lourdes St, Angeles, Pampanga'
    },
    {
      school: 'Angeles City National Trade School',
      level: 'Junior High School',
      year: '2016 - 2020',
      address: '4HP7+W7F, Fil-Am Friendship Hwy, Angeles, 2009 Pampanga'
    },
    {
      school: 'Holy Angel University',
      level: 'Senior High School & College',
      year: '2020 - Present',
      address: '#1 Holy Angel St, Angeles, Pampanga'
    }
  ];
}
