import { Component, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-outlet-list',
  templateUrl: './outlet-list.page.html',
  styleUrls: ['./outlet-list.page.scss'],
})
export class OutletListPage {
  constructor(
    private location: Location) { }

  public goBack(): void {
    this.location.back();
  }
}
