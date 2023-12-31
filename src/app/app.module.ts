import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobComponent } from './components/job/job.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HammerModule } from '@angular/platform-browser';
import { IgxCalendarModule } from 'igniteui-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostJobComponent } from './pages/post-job/post-job.component';



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
    CalendarComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    JobsListComponent,
    JobComponent,
    CategoryComponent,
    HomeComponent,
    NotFoundComponent,
    PostJobComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule,
    IgxCalendarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
