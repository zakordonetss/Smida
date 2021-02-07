import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Post } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
    public tableData: Post[];

    constructor() { }

    toppings = new FormControl();
    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

    publicationTypes = new FormControl();
    publicationTypesList: string[] = [];

    termTypes = new FormControl();
    termTypesList: string[] = [];

    setFiltersType() {
        this.setPublicationTypes();
        this.setTermTypes();
    }

    setPublicationTypes() {
        for (let el of this.tableData) {
            if (!this.publicationTypesList.includes(el.publicationType)) {
                this.publicationTypesList.push(el.publicationType);
            }
        }
    }

    setTermTypes() {
        for (let el of this.tableData) {
            if (!this.termTypesList.includes(el.termType)) {
                this.termTypesList.push(el.termType);
            }
        }
    }
}
