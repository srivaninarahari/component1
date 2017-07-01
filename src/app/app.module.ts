;
import { RootComponentComponent } from './root-component/root-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//here  rootcomponet  added  in  ngModulle

@NgModule({
  declarations: [
    AppComponent,
    RootComponentComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
