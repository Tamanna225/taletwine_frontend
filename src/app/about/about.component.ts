import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { FotterComponent } from '../fotter/fotter.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AppHeaderComponent, CommonModule, FotterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
