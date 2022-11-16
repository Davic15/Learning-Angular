import { Component, OnInit } from '@angular/core';
import { FlopService } from './flop.service';

@Component({
  selector: 'app-flop-list',
  templateUrl: './flop-list.component.html',
  styleUrls: ['./flop-list.component.css']
})
export class FlopListComponent {
  flops$: any;
  rentalList: any;
  constructor(private flopService: FlopService) { }

  ngOnInit() {
    this.flops$ = this.flopService.getFlops()
    this.flopService.getRentalList()
    .subscribe(rentalList => this.rentalList = rentalList)
  }

  onClick() {
    console.log('rented')
  }

}
