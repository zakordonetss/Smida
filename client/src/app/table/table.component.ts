import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Post } from '../app.component';
import { TableDataService } from '../services/table-data.service';
import { TableFiltersService } from '../services/table-filters.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})


export class TableComponent {
    

  constructor(
      public tableDataService: TableDataService,
      public tableFilterService: TableFiltersService,
      ) {
  }


  logFromTable() {
      console.log(this.tableDataService.tableData);
  }

    displayedColumns: string[] = ['Тип публікації', 'Періодичність', "Категорія суб'єкта", 'Статус', 'Тип файлу', 'Вихідна дата документу', 'Вихідний номер документу'];
}
