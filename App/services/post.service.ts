import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/observable';/*like promises &better than promises*/
import 'rxjs/Rx';/*promises*/
import 'rxjs/operator/map';/*promises*/

interface Post{
     _id:number,
     title:string,
     body:string
}

@Injectable()


/*export class PostServices{
	private posts :any[];
	constructor(){
		this.posts=[
          {
          	title :"Hello Hyd",
          	body : "Gud after noon....Divya"
          },
          	
          {
          	titl :"Latest Updates",
          	body: "no updates till now"
          },
          {
          	title:"about Hyd",
          	body: "Nice But too much sunny..."
          },
          {
          	title:"i Djspy",
          	body:"Gud Luck Djspy" 
          }
		]
	}
	getPost(){
	 return this.posts;
        }

        addPosts(newPost:any){
             this.posts.push(newPost);
        }
}
*/
export class PostServices{
     private posts :any[];
     private  apiUrl:string;
     private postData:any;
     constructor(private _http:Http){         
          this.apiUrl="https://jsonplaceholder.typicode.com/posts"         
     }
     getPosts() :Observable<Post[]>{
      return this._http
                        .get(this.apiUrl)

                      .map((response)=>{
                           console.log(response)
                           console.log(response.json())

                        return response.json()

                      });
        }

        /*addPost(newPost:any){
             this.posts.push(newPost);
        }*/
}

