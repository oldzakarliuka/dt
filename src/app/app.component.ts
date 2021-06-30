import { Component, Host, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

import { ApiService } from './api.service';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [ConfigService]
})
export class AppComponent implements OnInit {

  AuthToken!: string;

  Form: FormGroup = new FormGroup({
    logo: new FormControl(''),
    title: new FormControl(''),
    main_color: new FormControl(''),
    background_color: new FormControl(''),

  })

  constructor(public sanitizer: DomSanitizer,
    @Host() private configService: ConfigService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.askToken();
  }

  askToken() {
    const answer = prompt('TOKEN')
    if (answer) {
      this.AuthToken = answer
    }
  }

  onSubmit() {
    this.apiService.updateConfig(this.Form.value, this.AuthToken).subscribe(res => {
      console.log(res);
      alert('Success press ok to reload');
      location.reload();
    }, console.log, console.log)
  }

  isColorPicker(value: string) {
    return ['main_color', 'background_color'].includes(value);
  }

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
