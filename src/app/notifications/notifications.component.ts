import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  data:any;

  constructor(private dataService:ProfileService) { }

  ngOnInit() {
     
          this.dataService.getAlbums().subscribe(response=>this.data=response);

  }

}
