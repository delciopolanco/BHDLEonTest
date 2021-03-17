import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class DashboardPage {

  public slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1,
  };

  constructor() {}

}
