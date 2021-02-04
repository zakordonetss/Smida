import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})


export class TableComponent implements OnInit {
@Input() posts;

  constructor() {
  }

  ngOnInit() {
  }

  logFromTable() {
      console.log(this.posts);
  }

  displayedColumns: string[] = ['Тип публікації', 'Періодичність', "Категорія суб'єкта", 'Статус', 'Тип файлу', 'Вихідна дата документу', 'Вихідний номер документу'];
}
