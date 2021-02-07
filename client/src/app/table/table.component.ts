import {Component} from '@angular/core';
import { FormControl } from '@angular/forms';
import { TableDataService } from '../services/table-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})


export class TableComponent {
    publicationTypes: FormControl = this.tableDataService.publicationTypes;
    publicationTypesList: string[] = this.tableDataService.publicationTypesList;

    termTypes: FormControl = this.tableDataService.termTypes;
    termTypesList: string[] = this.tableDataService.termTypesList;


  constructor(
      public tableDataService: TableDataService,
      ) {}


  logFromTable() {
      console.log(this.tableDataService.termTypes);
  }

    displayedColumns: string[] = ['Тип публікації', 'Періодичність', "Категорія суб'єкта", 'Статус', 'Тип файлу', 'Вихідна дата документу', 'Вихідний номер документу'];
}
