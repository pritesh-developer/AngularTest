import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './test/login/login.component';
import { RegisterComponent } from './test/register/register.component';

const routes: Routes = [{path:'login',loadChildren:'./test/test.module#TestModule'},{path:'register',component:RegisterComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
