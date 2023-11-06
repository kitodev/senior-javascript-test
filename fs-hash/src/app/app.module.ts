import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FsHashComponent } from './fs-hash/fs-hash.component';
import { FS } from './fs-hash/fs.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FS],
  bootstrap: [AppComponent]
})
export class AppModule { }
