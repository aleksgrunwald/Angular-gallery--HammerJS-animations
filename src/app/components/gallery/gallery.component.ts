import { Component, Input, OnInit } from '@angular/core';
import { ImagesService } from "../../services/images.service";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { UpdateComponentService } from "../../services/update-component.service";
import { ChosenImageCoordinatesService } from "../../services/chosenImageCoordinates.service";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{

  images = [];
  @Input() favourite?: boolean = false;
  onlyFavourites: boolean = false;

  pageTitle: string  = 'the Cats';


  constructor(
    private imagesService: ImagesService,
    private router: Router,
    private title: Title,
    private updateComponentService: UpdateComponentService,
    private chosenImageCoordinatesService: ChosenImageCoordinatesService
  ) {
    this.images = this.imagesService.getImages();
    this.title.setTitle("The Gallery");
  }


  ngOnInit() {
    this.updateComponentService.setData(this.pageTitle);
  }


  getImageCoordinatesHideImage(event) {
    this.chosenImageCoordinatesService.setData(event.target.getBoundingClientRect());
    let image = event.path[3]
    image.style.opacity = '0';
  }

}
