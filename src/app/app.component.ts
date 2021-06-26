import { Component, Host } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [ConfigService]
})
export class AppComponent {
  constructor( public sanitizer: DomSanitizer,
    @Host() private configService: ConfigService) {}

    get franchiseStyles() {
      return this.configService.franchiseStyles
    }
    
    get logo() {
      return this.configService.logo;
    }

    get title() {
      return this.configService.title
    }

}
