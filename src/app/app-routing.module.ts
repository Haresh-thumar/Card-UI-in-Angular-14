import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickupPointComponent } from './pickup-point/pickup-point.component';

const routes: Routes = [
  { path: '', redirectTo: 'pickup-point', pathMatch: 'full' },
  { path: 'pickup-point', component: PickupPointComponent },
  { path: 'bus-root', component: PickupPointComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
