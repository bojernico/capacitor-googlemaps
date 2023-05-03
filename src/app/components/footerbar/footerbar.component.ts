import {
  Component,
  EventEmitter,
  OnInit,
  Output} from '@angular/core';

@Component({
  selector: 'app-footerbar',
  templateUrl: './footerbar.component.html',
  styleUrls: ['./footerbar.component.scss'],
})
export class FooterbarComponent  {

  @Output()
  public showListChange = new EventEmitter<any>();
  public showList(): void {
    this.showListChange.emit();
  }
}
