
import { globalModule } from './global.module';
import {Jsonp} from '@angular/http';

export class Wikipedia {
    constructor(private jsonp: Jsonp) {
    }
    search(term: string) {
        var search = new URLSearchParams();
        search.set('action', 'opensearch');
        search.set('search', term);
        search.set('format', 'json');
        return this.jsonp
            .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
            .map((request) => request.json()[1]);
    }

}


globalModule.service('Wikipedia', Wikipedia);