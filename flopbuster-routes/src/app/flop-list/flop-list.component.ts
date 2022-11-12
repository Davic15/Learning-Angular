import { Component, OnInit } from '@angular/core';
import { FlopService } from './flop.service';

@Component({
  selector: 'app-flop-list',
  templateUrl: './flop-list.component.html',
  styleUrls: ['./flop-list.component.css']
})
export class FlopListComponent implements OnInit {
  flops: any;

  constructor(private flopService: FlopService) { }

  ngOnInit() {
    this.flopService.getFlops()
    .subscribe(flops => {
      this.flops = flops;
    })
  }

}
