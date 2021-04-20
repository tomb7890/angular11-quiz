import { Injectable } from '@angular/core';
import { QItem } from './qitem.model';
import { StaticDataSource } from './static.datasource';

@Injectable()

export class QItemRepository {
    private qitems: QItem[] = [];

    constructor(private dataSource: StaticDataSource) {
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
