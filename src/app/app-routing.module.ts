import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusRootComponent } from './bus-root/bus-root.component';
import { GetTimezoneDiffComponent } from './get-timezone-diff/get-timezone-diff.component';
import { PickupPointComponent } from './pickup-point/pickup-point.component';
import { MatCustomElementComponent } from './mat-custom-element/mat-custom-element.component';

const routes: Routes = [
  { path: '', redirectTo: 'bus-root', pathMatch: 'full' },
  { path: 'bus-root', component: BusRootComponent },
  { path: 'pickup-point', component: PickupPointComponent },
  { path: 'getTimeDiff', component: GetTimezoneDiffComponent },
  { path: 'matCustom', component: MatCustomElementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
