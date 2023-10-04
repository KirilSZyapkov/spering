import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { JobSearchComponent } from './pages/job-search/job-search.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
  },
  {
    path: 'job-search',
    component: JobSearchComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
