import {Component} from'@angular/core';
import {PostServices} from './services/post.service';
import {PostComponent} from './services/post.component';

@Component({
	selector: 'my-app',
    template:`
              <h1>Angular services App</h1>
              <br>
              <posts></posts>
              `,
    providers:[PostServices]          
})

export class AppComponent{

}          