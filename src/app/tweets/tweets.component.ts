import { Component, OnInit } from '@angular/core';

import {ProfileService} from '../profile.service';

import {posts} from '../model/posts';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  public values:any;

  constructor(private profileData: ProfileService) { }

  ngOnInit() {

  
    this.getPostsData();
    

  }

  getPostsData(){

    this.profileData.getPosts().subscribe(data=>this.values=data);

    
   
    
  }

  

}
