import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AgmCoreModule} from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCaHJW423r_DZxaPPT5RLrto3UvAFWBhwo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
