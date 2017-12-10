import { OktaAuthService } from '@okta/okta-angular';
import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cool cars app';

  constructor(private oktaAuth: OktaAuthService) {
  }
}
