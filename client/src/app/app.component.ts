import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TableDataService } from './services/table-data.service';
import { TableComponent } from './table/table.component';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    @ViewChild(TableComponent) table:TableComponent;

    constructor(
        private http: HttpClient,
        ) {}

    ngOnInit() {
        this.http.get<Post[]>('http://localhost:4050/test-data')
            .subscribe(data => {
                this.table.tableData = data;
                
                this.table.setFiltersTypes();
            })
    }


    log() {
        console.log(this.table.tableData);
    }

    
}
