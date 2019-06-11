import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';

import { GalleryComponent } from "./components/gallery/gallery.component";
import { ImageDetailsComponent } from "./components/image-details/image-details.component";

const routes: Route[] = [
  { path: '', redirectTo: '/gallery', pathMatch: 'full' },
  { path: 'gallery', component: GalleryComponent, data: { animation: 'GalleryPage'} },
  { path: 'imagedetails/:id', component: ImageDetailsComponent, data: { animation: 'ImageDetailsPage'}}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(
    routes,
    {
      scrollPositionRestoration: 'enabled'
    }
  )]
})
export class GalleryRoutingModule { }
