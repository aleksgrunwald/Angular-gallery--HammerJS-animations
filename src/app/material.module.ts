import {NgModule} from "@angular/core";

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material";
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSlideToggleModule],
  exports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSlideToggleModule],
})
export class MaterialModule {}
