import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FlopService } from '../flop-list/flop.service';


@Component({
  selector: 'app-flop-details',
  templateUrl: './flop-details.component.html',
  styleUrls: ['./flop-details.component.css']
})
export class FlopDetailsComponent {
  flop: any;
  constructor(private flopService: FlopService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe((params: any) => {
      this.flopService.getFlop(+params.get('id'))
      .subscribe(flop => {
        this.flop = flop;
      })
    });
  }

}
