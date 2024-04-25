import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../Service/services.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailed-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detailed-blog.component.html',
  styleUrl: './detailed-blog.component.css'
})
export class DetailedBlogComponent {
    loggedUser: any;
    public id !: string | null;

    public blog : any;
    constructor(private route: ActivatedRoute, private service: ServicesService, private router: Router) {
      const localUser = localStorage.getItem('loggedUser');
      if(localUser != null) {
      this.loggedUser = JSON.parse(localUser);
     }
    }

   

    deleteFunction(id: any){
      this.service.deleteData(id).subscribe((data)=>{
        console.log("data deleted successfully");
      },(error)=>{
        console.log("error occured in deleting data check detailed-blog.component.ts i am from there");
      });
      this.router.navigateByUrl('/home');
    }

    ngOnInit(): void {
      
      this.id = this.route.snapshot.paramMap.get('id');
      this.service.getDataById(this.id).subscribe((data)=>{
        this.blog = data;
      }, (error)=>{
        console.log("error occured in reading data check detailed-blog.component.ts i am from there");
      }
    );
}
}
