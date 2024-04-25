import { Component, OnInit } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesService } from '../Service/services.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-post',
  standalone: true,
  
  imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent implements OnInit{
  loggedUser: any;
  addBlog!: FormGroup; // Declare addBlog here

  constructor(private service : ServicesService, private router: Router) {
    const localUser = localStorage.getItem('loggedUser');
    if(localUser != null) {
      this.loggedUser = JSON.parse(localUser);
    }

    // Initialize addBlog in the constructor after loggedUser has been assigned
    this.addBlog = new FormGroup({
      id: new FormControl(uuid()),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      createdBy: new FormControl(this.loggedUser),
    });
  }

  onSubmit(){
    console.log(this.addBlog.value);
    this.service.sendData(this.addBlog.value).subscribe(
      (data) => {
      console.log("data sent successfully");
    },
    (error)=>{
        console.log(error);
      }
    );
    this.router.navigateByUrl('/about');
  }

  ngOnInit(): void {
  }
}
