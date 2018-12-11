import { Component, OnInit } from '@angular/core';

import { SidebarComponent } from '../sidebar/sidebar.component';

import { ProfileService} from '../profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allPosts;
  allComments;
  name:string;
  description:string;

   userData={
    userId:4,
    id:200,
    title:'',
    body:''
  }

  constructor(private serviceData: ProfileService) { }

  ngOnInit() {
   
    this.serviceData.getPosts().subscribe(data=>this.allPosts=data);

    this.serviceData.getComments().subscribe(data=>this.allComments=data);

    

  }

  submitForm(){
    this.userData.title=this.name;
    this.userData.body=this.description;
    this.serviceData.addPost(this.userData).subscribe(res=>console.log(res));
  }

}
