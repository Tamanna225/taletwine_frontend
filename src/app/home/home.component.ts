import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesService } from '../Service/services.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DetailedBlogComponent } from '../detailed-blog/detailed-blog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, DetailedBlogComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  items !: any
  constructor(private getBlogServices : ServicesService, private router: Router, private route: ActivatedRoute ) {
      
   }
  

  ngOnInit(): void {
            this.getBlogServices.getData().subscribe((data)=>{
                      this.items = data;
            }, (error)=>{
              console.log("error occured in reading data check home.component.ts i am from there");
            });
  }

}
