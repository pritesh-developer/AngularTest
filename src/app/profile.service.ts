import { Injectable, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {posts} from './model/posts';

import { Observable }  from 'rxjs/Observable';

const api_url="https://jsonplaceholder.typicode.com/";

@Injectable({
  providedIn: 'root'
})
export class ProfileService  {

   data={userId:"1"};

  constructor(private http: HttpClient) { }

  getPosts(){

    return this.http.get(api_url+"posts")
           .map((response:Response) => response);
  }

  getAlbums(){
    return this.http.get(api_url+"albums")
           .map((response:Response)=>response)
  }

  getComments(){

    return this.http.get(api_url+"comments")
           .map((response:Response) => response);
  }

  getUsers(){
    return this.http.get(api_url+"users")
           .map((response:Response)=>response)
  }

  getPostsByUser(){
    return this.http.get(api_url+"posts",{params:this.data})
           .map((response:Response)=>response)
  }

  addPost(req){
     console.log(req);
     return this.http.post(api_url+"posts",req)
           .map((response:Response)=>response)
  }

  

 


}
