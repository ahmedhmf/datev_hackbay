import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OpenedPositionsComponent } from './opened-positions/opened-positions.component';
import { UploadCvComponent } from './upload-cv/upload-cv.component';

const routes: Routes = [
  {
    path: 'home',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
