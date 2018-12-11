import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  userPosts:any;

  constructor(private postsData:ProfileService) { }

  ngOnInit() {

    this.postsData.getPostsByUser().subscribe(res=>this.userPosts=res);
  }

}
