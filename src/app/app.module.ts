import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './components/app/app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ToolbarsComponent } from './components/toolbars/toolbars.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { FavouritePipe } from "./pipes/favourites.pipe";
import { ImagesService } from "./services/images.service";
import { UpdateComponentService } from "./services/update-component.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material.module";
import { GalleryRoutingModule } from './gallery-routing.module';
import {FormsModule} from "@angular/forms";
import {ChosenImageCoordinatesService} from "./services/chosenImageCoordinates.service";


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ToolbarsComponent,
    ImageDetailsComponent,
    FavouritePipe
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    GalleryRoutingModule,
    // FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ImagesService, FavouritePipe, UpdateComponentService, ChosenImageCoordinatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
