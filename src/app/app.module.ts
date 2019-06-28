import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { registerLocaleData } from '@angular/common';
import * as moment from 'moment';

import localeEs from '@angular/common/locales/es';
// Custom Pipes
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { SmartTruncatePipe } from './pipes/smartTruncate/smart-truncate.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CapitalizePipe,
    SmartTruncatePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HeroesComponent]
})
export class AppModule { }
