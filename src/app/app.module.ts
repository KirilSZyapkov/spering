import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobSearchComponent } from './pages/job-search/job-search.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { JobseekerComponent } from './pages/registration/components/jobseeker/jobseeker.component';
import { EmployerComponent } from './pages/registration/components/employer/employer.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    JobSearchComponent,
    LoginComponent,
    RegistrationComponent,
    JobseekerComponent,
    EmployerComponent,
    JobDetailsComponent,
    MyProfileComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
