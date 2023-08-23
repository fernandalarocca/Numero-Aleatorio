import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RandomNumberComponent } from './random-number/random-number.component';
import { NumberDisplayComponent } from './number-display/number-display.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [AppComponent, RandomNumberComponent, NumberDisplayComponent],
  imports: [BrowserModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
