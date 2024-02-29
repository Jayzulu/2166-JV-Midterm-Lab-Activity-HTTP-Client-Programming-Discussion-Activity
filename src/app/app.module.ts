import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpclientComponent } from './httpclient/httpclient.component';

import { HttpclientService } from './httpclient.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HttpclientComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [HttpclientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
