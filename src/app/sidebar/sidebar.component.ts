import { Component, OnInit } from '@angular/core';

import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  allUsers;

  constructor(private usersData:ProfileService) { }

  ngOnInit() {

    this.usersData.getPosts().subscribe(data=>this.allUsers=data);
  }

}
