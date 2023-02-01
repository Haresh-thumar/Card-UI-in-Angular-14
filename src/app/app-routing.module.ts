import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusRootComponent } from './bus-root/bus-root.component';
import { PickupPointComponent } from './pickup-point/pickup-point.component';

const routes: Routes = [
  // { path: '', redirectTo: 'bus-root', pathMatch: 'full' },
  { path: 'pickup-point', component: PickupPointComponent },
  { path: 'bus-root', component: BusRootComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
