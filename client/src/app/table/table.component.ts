import { HttpClient } from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Post {
    publicationType: string,
    termType: string,
    reportGroup: string,
    reportState: string,
    reportFormat: string,
    outputDate: {
        date: Date,
    },
    outputNumber: number,
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})


export class TableComponent implements OnInit {
    log(event) {
      console.log(event);
    }

    logFromTable() {
      console.log(this.dataSource.data);
      this.filterTable();
     }
    dataSource: MatTableDataSource<Post> = new MatTableDataSource();

    
    form: FormGroup;

    publicationTypes: FormControl;
    publicationTypesList: string[] = [];

    termTypes: FormControl;
    termTypesList: string[] = [];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private http: HttpClient,
        ) {}

    ngOnInit() {
        this.http.get<Post[]>('http://localhost:4050/test-data')
            .subscribe(data => {
                this.dataSource.data = data;
                this.setFiltersTypes();
            })
            
        this.form = new FormGroup({});
        this.publicationTypes = new FormControl();
        this.termTypes = new FormControl();
    }

    setFiltersTypes() {
        this.setPublicationTypes();
        this.setTermTypes();
    }

    setPublicationTypes() {
        for (let el of this.dataSource.data) {
            if (!this.publicationTypesList.includes(el.publicationType)) {
                this.publicationTypesList.push(el.publicationType);
            }
        }
    }

    setTermTypes() {
        for (let el of this.dataSource.data) {
            if (!this.termTypesList.includes(el.termType)) {
                this.termTypesList.push(el.termType);
            }
        }
    }

    filterTable() {
        this.filterByTermTypes()
    }

    filterByTermTypes() {
        const checkedTermTypes: string[] = this.termTypes.value;

        this.dataSource.data = this.dataSource.data.filter(item => checkedTermTypes.includes(item.termType))
    }

    getIndexByTermType(type) {
        return this.dataSource.data.findIndex(item => item.termType === type);
    }

    displayedColumns: string[] = ['Тип публікації', 'Періодичність', "Категорія суб'єкта", 'Статус', 'Тип файлу', 'Вихідна дата документу', 'Вихідний номер документу', 'Скинути'];
}
