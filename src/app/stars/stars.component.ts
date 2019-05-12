import { Component, OnInit, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  faStar = faStar;
  faSolidStar = faSolidStar;

  @Input()
  private rating: number = 0;
  private stars: boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (let i = 1; i <=5; i++) {
      this.stars.push(i> this.rating);
    }
    // this.stars = [false, false, true, true, true];
  }

}
