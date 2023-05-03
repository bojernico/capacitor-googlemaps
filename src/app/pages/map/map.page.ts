import { GoogleMap } from '@capacitor/google-maps';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { CreateMapArgs } from '@capacitor/google-maps/dist/typings/implementation';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-home',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss'],
})
export class MapPage implements AfterViewInit {
  constructor(private router: Router) {}
  async ngAfterViewInit(): Promise<void> {
    await this.loadMapAsync();
  }

  public showList(): void {
    this.router.navigate(['/outlet-list']);
  }

  @ViewChild('map')
  mapRef: ElementRef<HTMLElement> | undefined;
  private map: GoogleMap | undefined;

  private async loadMapAsync(): Promise<void> {
    if (this.map) {
      return;
    }
    const id = 'gourmet-app_' + DateTime.now().second;
    const option: CreateMapArgs = {
      apiKey: 'whoops',
      id: id,
      config: {
        center: {
          lat: 48.21,
          lng: 14.4,
        },
        zoom: 10,
        disableDefaultUI: true,
        gestureHandling: 'cooperative',
      },
      forceCreate: true,

      element: this.mapRef!.nativeElement,
    };
    this.map = await GoogleMap.create(option);
  }
}
