import { Injectable } from '@angular/core';
import { QItem } from './qitem.model';
import { Observable, from } from 'rxjs';


@Injectable()
export class StaticDataSource {
    private qitems: QItem[] = [
       new QItem(
         'Which is the largest country in the world by population?',
         ['India', 'USA', 'China', 'Russia'],
         'China' ),

       new QItem (
         'When did the second world war end?',
         ['1945', '1939', '1944', '1942' ],
         '1945' ),

       new QItem (
         'Which was the first country to issue paper currency?',
         ['USA', 'France', 'Italy', 'China'],
         'China' ),

       new QItem (
         'Which city hosted the 1996 Summer Olympics?',
         [ 'Atlanta', 'Sydney', 'Athens', 'Beijing' ],
         'Atlanta' ),

       new QItem (
         'Who invented telephone?',
         [ 'Albert Einstein', 'Alexander Graham Bell', 'Isaac Newton', 'Marie Curie'],
         'Alexander Graham Bell'  )

    ];

    getQItems(): Observable<QItem[]> {
        return from([this.qitems]);
    }

}
