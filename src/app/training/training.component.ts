import { Component } from '@angular/core';
import { SkillsCertificationsComponent } from '../skills-certification/skills-certification.component';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [SkillsCertificationsComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})

export class TrainingComponent {
  training1: string = 'Coursea Figma';
  training2: string = 'Free Code Camp Responsive Web Design';
  training3: string = 'Free Code Camp JS Fundamentals';
  training4: string = 'Udemy Web Development Bootcamp';
}
