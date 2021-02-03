import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    public posts;

    constructor(public http: HttpClient) {}

    ngOnInit() {
        this.http.get('http://localhost:4050/test-data')
            .subscribe(posts => {
                this.posts = posts;
            })
    }

    log() {
        console.log(this.posts);
    }
}
