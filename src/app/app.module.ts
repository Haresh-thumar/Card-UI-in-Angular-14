import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PickupPointComponent } from './pickup-point/pickup-point.component';
import { BusRootComponent } from './bus-root/bus-root.component';

@NgModule({
  declarations: [
    AppComponent,
    PickupPointComponent,
    BusRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
