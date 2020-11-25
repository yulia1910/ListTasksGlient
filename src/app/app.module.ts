import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:
        [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
