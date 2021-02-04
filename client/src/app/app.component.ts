import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
    public posts = [];
    public data;

    constructor(public http: HttpClient) {}

    ngOnInit() {
        this.http.get('http://localhost:4050/test-data')
            .subscribe(data => {
                this.data = data;
            })
        
        for (let post of this.data) {
            this.posts.push(post)
        }
    }

    log() {
        console.log(this.posts);
        console.log(this.data);
    }

    
}
