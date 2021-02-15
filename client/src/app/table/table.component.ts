import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../app.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})


export class TableComponent implements OnInit {
    public tableData: Post[];
    form: FormGroup;

    publicationTypes: FormControl;
    publicationTypesList: string[] = [];

    termTypes: FormControl;
    termTypesList: string[] = [];

    ngOnInit() {
        this.form = new FormGroup({});
        this.publicationTypes = new FormControl();
        this.termTypes = new FormControl();
    }

    setFiltersTypes() {
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

    filterTable() {
        this.filterByTermTypes()
    }

    filterByTermTypes() {
        const checkedTermTypes: string[] = this.termTypes.value;

        this.tableData = this.tableData.filter(item => checkedTermTypes.includes(item.termType))
    }

    getIndexByTermType(type) {
        return this.tableData.findIndex(item => item.termType === type);
    }


  logFromTable() {
      console.log(this.termTypes);
      this.filterByTermTypes();
  }

  log(event) {
      console.log(event);
  }

    displayedColumns: string[] = ['Тип публікації', 'Періодичність', "Категорія суб'єкта", 'Статус', 'Тип файлу', 'Вихідна дата документу', 'Вихідний номер документу', 'Скинути'];
}
