import { Component, OnInit } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesService } from '../Service/services.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { error } from 'node:console';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, HttpClientModule],

  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent {
  constructor(private service : ServicesService, private navigate: Router, private route: ActivatedRoute ) { }
  
  blog !: any;
  editBlog !: any;
  id: any =  this.route.snapshot.paramMap.get('id');
  
  onSubmit(){
    this.service.updateData(this.id, this.editBlog.value).subscribe((data)=>{
      console.log("data updated successfully");
    },(error)=>{
        console.log("error occured in updating data check edit-post.component.ts i am from there");
    });
    this.navigate.navigateByUrl('/home');
  }
  ngOnInit(): void {
  // Initialize editBlog with empty form controls
  this.editBlog = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });

  this.service.getDataById(this.id).subscribe(
    (data) => {
      this.blog = data;
      // Set the form control values after the data is fetched
      this.editBlog.setValue({
        id: this.id,
        title: this.blog['title'],
        description: this.blog['description'],
        content: this.blog['content'],
      });
    },
    (error) => {
      console.log("Error occurred while fetching data by ID");
    }
  );
}
}