import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TweetsComponent } from './tweets/tweets.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DiscoverComponent } from './discover/discover.component';




import { HomeComponent } from './home/home.component';
import { MeComponent } from './me/me.component';

const routes: Routes = [{path:'',component:HomeComponent,children:[{path:'',component:TweetsComponent},
{path:'notifications',component:NotificationsComponent},{path:'discover',component:DiscoverComponent},
{path:'me',component:MeComponent}
]
}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
