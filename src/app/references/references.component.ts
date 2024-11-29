import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})
export class ReferencesComponent {
  reference1Name: string = 'Prof. Rene Laguna';
  reference1Title: string = 'Professor, IT Web Development Department';
  reference1Contact: string = 'rlaguna@hau.edu.ph';

  reference2Name: string = 'Prof. Chris Almocera';
  reference2Title: string = 'Professor, IT Web Development Department';
  reference2Contact: string = 'calmocera@hau.edu.ph';

}
