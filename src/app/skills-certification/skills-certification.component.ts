import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-certification',
  standalone: true,
  imports: [],
  templateUrl: './skills-certification.component.html',
  styleUrl: './skills-certification.component.css'
})

export class SkillsCertificationsComponent {
  wordpress: string = 'Skilled in building and managing websites using WordPress.';
  figma: string = 'Experienced in using Figma for UI/UX design and prototyping';
  git: string = 'Proficient in using Git for version control and collaboration.';
  js: string = 'Advanced knowledge of JavaScript fundamentals and web development.';
  net: string = 'Cisco Certification in Introduction to Networks (2023-2024)';
  cyb: string = 'Cisco Certification in Cybersecurity Essentials (2024-2024)';
  freecode: string = 'Certification in FreeCodeCamp CSS and JavaScript (2023-2024)';
  python: string = 'Certification in Python Programming (2024-2024)';
}


