import { Injectable } from '@angular/core';

declare var config: any;
@Injectable()
export class ConfigService {

  readonly Config = config;
  readonly Styles = [
    "main_color",
    "background_color",
  ]
  constructor() {}

  get configurationStyles() {
    return config;
    // return this.Configuration;
  }

  get franchiseStyles() {
    return this.Styles.map(key => `--${key}:${this.Config[key]}`).join(";");
  }

  get title() {
    return this.Config?.title;
  }

  get logo() {
    return this.Config?.logo;
  }
}
