import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {Post} from './post';


@Component({
  selector: 'ma-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[];

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.getPosts().subscribe(
      (res) => {
        this.posts = res;
      }, (err) => {
        console.log(err);
      }
    );
  }

}
