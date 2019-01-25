import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {Post} from './post';
import {NGXLogger} from 'ngx-logger';


@Component({
  selector: 'ma-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[];

  constructor(private homeService: HomeService, private log: NGXLogger) {
  }

  ngOnInit() {
    this.homeService.getPosts().subscribe(
      (res) => {
        this.posts = res;
      }, (err) => {
        this.log.error(err);
      }
    );
  }

}
