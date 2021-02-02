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
        this.http.get('Access-Control-Allow-Origin: https://amazing.site')
            .subscribe(posts => {
                this.posts = posts;
                console.log(posts);
            })
    }
}
