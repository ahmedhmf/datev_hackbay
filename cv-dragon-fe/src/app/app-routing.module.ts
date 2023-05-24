import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OpenedPositionsComponent } from './opened-positions/opened-positions.component';
import { UploadCvComponent } from './upload-cv/upload-cv.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { RecruterComponent } from './recruter/recruter.component';
import { JobDetailsComponent } from './job-details/job-details.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'uploadcv',
    component: UploadCvComponent,
  },
  {
    path: 'openedPositions',
    component: OpenedPositionsComponent,
  },
  {
    path: 'applicant',
    component: ApplicantsComponent,
  },
  {
    path: 'recruiter',
    component: RecruterComponent,
    children: [],
  },
  { path: 'job/:id', component: JobDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
