import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';


@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';

  martrust = assetUrl("logo_martrust_black.png");
}
