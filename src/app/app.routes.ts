import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailedBlogComponent } from './detailed-blog/detailed-blog.component';
import { AboutComponent } from './about/about.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'about', component: AboutComponent},
    {path:'home', component: HomeComponent},
    {path:'blogs/:id', component:DetailedBlogComponent},
    {path:'editblog/:id', component:EditPostComponent},
    {path:'addpost',component:AddPostComponent},
    {path:'contact',component:ContactUsComponent},
    {path:'', component:LoginComponent}
];
