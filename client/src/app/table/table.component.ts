import { HttpClient } from '@angular/common/http';
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

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


export class TableComponent implements OnInit, OnDestroy {
    logFromTable() {
        console.log(this.form);  
    }

    public dataSource: MatTableDataSource<Post> = new MatTableDataSource();
    private _tableData: Post[];
    private _sub: Subscription;
    
    public form: FormGroup;

    public publicationTypes: FormControl;
    public publicationTypesList: string[] = [];

    public termTypes: FormControl;
    public termTypesList: string[] = [];

    public reportGroups: FormControl;
    public reportGroupsList: string[] = [];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this._sub = this.http.get<Post[]>('http://localhost:4050/test-data')
            .subscribe(data => {
                this.dataSource.data = data;
                this._tableData = data;
                this._setFiltersTypes();
            })
        this.form = new FormGroup({});
        this.publicationTypes = new FormControl();
        this.termTypes = new FormControl();
        this.reportGroups = new FormControl();
    }

    ngOnDestroy() {
        this._sub.unsubscribe();
    }

    private _setFiltersTypes() {
        this._setPublicationTypes();
        this._setTermTypes();
        this._setReportGroups();
    }

    private _setPublicationTypes() {
        for (let el of this.dataSource.data) {
            if (!this.publicationTypesList.includes(el.publicationType)) {
                this.publicationTypesList.push(el.publicationType);
            }
        }
    }

    private _setTermTypes() {
        for (let el of this.dataSource.data) {
            if (!this.termTypesList.includes(el.termType)) {
                this.termTypesList.push(el.termType);
            }
        }
    }

    private _setReportGroups() {
        for (let el of this.dataSource.data) {
            if (!this.reportGroupsList.includes(el.reportGroup)) {
                this.reportGroupsList.push(el.reportGroup);
            }
        }
    }

    public filterTable() {
        this._filterByPublicationTypes();
        this._filterByTermTypes();
        this._filterByReportGroups();
    }

    private _filterByPublicationTypes() {
        if (this.publicationTypes.value && this.publicationTypes.value.length) {
            const checkedPublicationTypes: string[] = this.publicationTypes.value;
            this.dataSource.data = this.dataSource.data.filter(item => checkedPublicationTypes.includes(item.publicationType));
        } else this._resetDataSource(); 
    }

    private _filterByTermTypes() {
        if (this.termTypes.value && this.termTypes.value.length) {
            const checkedTermTypes: string[] = this.termTypes.value;
            this.dataSource.data = this.dataSource.data.filter(item => checkedTermTypes.includes(item.termType));
        } else this._resetDataSource();
    }

    private _filterByReportGroups() {
        if (this.reportGroups.value && this.reportGroups.value.length) {
            const checkedReportGroups: string[] = this.reportGroups.value;
            this.dataSource.data = this.dataSource.data.filter(item => checkedReportGroups.includes(item.reportGroup));
        } else this._resetDataSource();
    }

    private _resetDataSource() {
        this.dataSource.data = this._tableData;
    }

    displayedColumns: string[] = ['Тип публікації', 'Періодичність', "Категорія суб'єкта", 'Статус', 'Тип файлу', 'Вихідна дата документу', 'Вихідний номер документу', 'Скинути'];
}
