import { homeModule } from './home.module';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap'
import {Wikipedia} from '../global/data.service';


class welcomeCtrl {
    items: any;
    // items: Observable<Array<string>>;
    term = new FormControl();

    constructor(private wikipediaService: Wikipedia) {
    }


  // @TODO : inject wikipedia service

    $onInit() {
        this.items = this.term.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.wikipediaService.search(term))
            .subscribe( res => res.json());
    }
}

const welcomeComponent = {
  controller: welcomeCtrl,
  template: `
    <h1 class="home buttons">
      Welcome component
    </h1>
    <input type="text" [formControl]="term">
      <ul>
        <li *ngFor="let item of items">{{::$ctrl.item}}</li>
      </ul>
      
`
};

homeModule.component('welcome', welcomeComponent);
