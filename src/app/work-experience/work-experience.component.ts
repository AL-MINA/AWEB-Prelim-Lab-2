import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  job1: string = 'Web Developer Intern';
  company1: string = 'Cloudstaff, Angeles City';
  date1: string = 'June 2023 – September 2023';
  description1: string = 'Developed and maintained client websites using HTML, CSS, and JavaScript to create responsive designs, ensuring a seamless user experience across devices.';
  job2: string = 'Freelance Web Developer/Graphic Designs/Ui and Ux Designs';
  date2: string = 'November 2023 - October 2024';
  description2: string = 'Designed engaging websites, custom graphics, and UI/UX interfaces for small businesses, focusing on creating seamless and visually appealing user experiences.';

}
