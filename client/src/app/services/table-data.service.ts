import { Injectable } from '@angular/core';
import { Post } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
    public tableData: Post[];

  constructor() { }
}
