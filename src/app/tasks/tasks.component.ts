import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:any;

  constructor(private tasksData:ProfileService) { }

  ngOnInit() {

    this.tasksData.getPosts().subscribe(data=>this.tasks=data);

  }

}
