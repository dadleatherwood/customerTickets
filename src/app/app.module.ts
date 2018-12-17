import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { CustomerTicketComponent } from './customer-ticket/app.customer-ticket.component';
import { DashboardComponent } from './dashboard/app.dashboard.component';
import { HomeComponent } from './home/app.home.component';
import { ScoreComponent } from './score/app.score.component';
import { MainRoutes} from "./routing/app.main-routing"

@NgModule({
  declarations: [
    CustomerTicketComponent,
    DashboardComponent,
    HomeComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
