import { HomeComponent } from '../home/app.home.component';
import { DashboardComponent } from '../dashboard/app.dashboard.component';
import { ScoreComponent } from '../score/app.score.component';
import { CustomerTicketComponent } from '../customer-ticket/app.customer-ticket.component';

export const MainRoutes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Dashboard', component: DashboardComponent}, 
  {path: 'Score', component: ScoreComponent},
  {path: 'CustomerSupport',component: CustomerTicketComponent},
  {path: '', component: CustomerTicketComponent} 
]
