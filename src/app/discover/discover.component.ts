import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  data:any;

  constructor(private dataS:ProfileService) { }

  ngOnInit() {

    this.dataS.getAlbums().subscribe(response=>this.data=response);

  }

}
