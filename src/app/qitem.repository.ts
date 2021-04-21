import { Injectable } from '@angular/core';
import { QItem } from './qitem.model';
import { RestDataSource  } from './rest.datasource';

@Injectable()

export class QItemRepository {
    private qitems: QItem[] = [];

    constructor(private dataSource: RestDataSource ) {
      dataSource.getQItems().subscribe(data => {
            this.qitems = data;
        });
    }

    getQItems(): QItem[] {
        return this.qitems;
    }

    getQItem(i: number) : QItem {
        return this.qitems[i];
    }

}
