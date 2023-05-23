import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RecruiterComponent } from './landing-page/recruiter/recruiter.component';
import { UploadCvComponent } from './upload-cv/upload-cv.component';

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
    path: 'recruiter',
    component: RecruiterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
