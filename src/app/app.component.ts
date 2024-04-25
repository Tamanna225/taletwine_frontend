import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { provideRouter } from '@angular/router';
import { DetailedBlogComponent } from './detailed-blog/detailed-blog.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FotterComponent } from './fotter/fotter.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AddPostComponent, HttpClientModule, HomeComponent, DetailedBlogComponent, AppHeaderComponent, CommonModule, FotterComponent, ContactUsComponent, LoginComponent],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taletwine';
}
