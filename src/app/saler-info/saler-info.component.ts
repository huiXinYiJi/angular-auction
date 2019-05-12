import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saler-info',
  templateUrl: './saler-info.component.html',
  styleUrls: ['./saler-info.component.css']
})
export class SalerInfoComponent implements OnInit {
  private sellerID: number;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.sellerID = this.routeInfo.snapshot.params["id"];
  }

}
