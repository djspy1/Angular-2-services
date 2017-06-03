import {Component} from '@angular/core';
import {PostServices} from './post.service';

@Component({
	selector:`posts`,
	template:`
	          <div class="container">
                  <h1>My BlogPosts</h1>
                  <br>
                     <div>
                        <label>Title:</label>
                        <input class="form-control" type="text" [(ngModel)]="title"/> <br>
                        <label>Body:</label>
                        <input class="form-control" type="text" [(ngModel)]="body"/><br>
                        <input class="btn btn-primary" type="button" (click)="addnewPost()" value="Add Post"/> <br>
                     </div>
                  <br>
                  <div class="container">
                  <ul *ngFor="let post of posts"> 
                    <li><b>{{post.title}}</b></li>
                    <li>{{post.body}}</li>
                  </ul>
                  </div>
	           </div>
             
	       `
})


                  // <div>
                  //    <label>Title:</label>
                  //    <input class=" form-control" type="text" [(ngModel)]="title"/><br>
                  //    <lable>Body:</label>
                  //    <input class="form-control" type="text" [(ngModel)="body"/> <br>
                  //    <input class="btn btn-primary" type="button" (click)="addnewPost()" value="AddPost()"/><br>
                  // </div>

export class PostComponent{
	private posts: any[];
	private title:string;
	private body:string;
	private newPost:any;

	constructor(private _postService:PostServices){/*inject statement=>PostServices*/
        this. _postService.getPosts().subscribe(response =>{
        	//this.posts=response
        	console.log(response)
        });
	}

	/*addNewPost(){
		this.newPost={
		title :this.title,
		body :this.body 

	}
     console.log(this.newPost);
	//this._postService.addPost(this.newPost)
	}
*/
	
}                                                                                                       