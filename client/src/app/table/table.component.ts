import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Post } from '../app.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})


export class TableComponent implements OnInit {
    @Input() tableData: Post[];

    toppings = new FormControl();
    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

    termTypes = new FormControl();
    termTypesList = [];


    ngOnInit() {
        this.setTermTypes()
    }

    setTermTypes() {
        for (let el of this.tableData) {
            if (!this.termTypesList.includes(el.termType)) {
                this.termTypesList.push(el.termType);
            }
        }
    }

    logFromTable() {
        this.setTermTypes();
        console.log(this.tableData);
        console.log(this.termTypesList);
    }

    displayedColumns: string[] = ['Тип публікації', 'Періодичність', "Категорія суб'єкта", 'Статус', 'Тип файлу', 'Вихідна дата документу', 'Вихідний номер документу'];
}
