import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FermentsComponent } from './ferments/ferments.component';
import { FermentDetailComponent } from './ferment-detail/ferment-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { NewFermentComponent } from './new-ferment/new-ferment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FermentDataComponent } from './ferment-data/ferment-data.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FermentsComponent,
    FermentDetailComponent,
    MessagesComponent,
    NewFermentComponent,
    FermentDataComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    NgxChartsModule,
    AppRoutingModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 