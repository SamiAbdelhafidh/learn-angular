import { Component } from '@angular/core';
import { CommonModule, LowerCasePipe, UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-about',
  imports: [CommonModule,UpperCasePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
