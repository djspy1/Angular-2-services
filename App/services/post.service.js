"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx"); /*promises*/
require("rxjs/operator/map"); /*promises*/
var PostServices = (function () {
    function PostServices(_http) {
        this._http = _http;
        this.apiUrl = "https://jsonplaceholder.typicode.com/posts";
    }
    PostServices.prototype.getPosts = function () {
        return this._http
            .get(this.apiUrl)
            .map(function (response) {
            console.log(response);
            console.log(response.json());
            return response.json();
        });
    };
    return PostServices;
}());
PostServices = __decorate([
    core_1.Injectable()
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
    ,
    __metadata("design:paramtypes", [http_1.Http])
], PostServices);
exports.PostServices = PostServices;
//# sourceMappingURL=post.service.js.map