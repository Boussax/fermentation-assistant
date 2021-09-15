import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FermentsComponent } from './ferments/ferments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FermentDetailComponent } from './ferment-detail/ferment-detail.component';
import { NewFermentComponent } from './new-ferment/new-ferment.component';
import { FermentDataComponent } from './ferment-data/ferment-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'ferments', component: FermentsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: FermentDetailComponent },
  { path: 'detail/:id/data-monitoring', component: FermentDataComponent},
  { path: 'new-fermentation-project', component: NewFermentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
