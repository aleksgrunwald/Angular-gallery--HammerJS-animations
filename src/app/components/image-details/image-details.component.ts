import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import { ImagesService } from "../../services/images.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { UpdateComponentService } from "../../services/update-component.service";
import {ChosenImageCoordinatesService} from "../../services/chosenImageCoordinates.service";
import {Subscription} from "rxjs";
import {imageDetailsAnimations} from "./image-details-animations";

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss'],
  animations: [ imageDetailsAnimations ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageDetailsComponent implements OnInit, OnDestroy {

  move: string;
  wrapperState: string = 'no';
  imageState: string = 'no';
  fitImage: string = "cover";

  numberOfImages: number;
  image: any;
  imageId: number;
  clickedImageCoords: any;
  imageCoordsSubscription: Subscription;

  pageTitle: string;

  constructor(
    private imageService: ImagesService,
    private route: ActivatedRoute,
    private title: Title,
    private updateComponentService: UpdateComponentService,
    private router: Router,
    private chosenImageCoordinatesService: ChosenImageCoordinatesService
    ) { }


  ngOnInit() {
    this.imageId = +this.route.snapshot.params['id'];
    this.getImageToDisplay(this.imageId)
    this.setAndSendInfoAboutThisComponent();
    this.pageTitle = this.image.name;
    this.imageCoordsSubscription = this.chosenImageCoordinatesService.getData().subscribe(coords => this.clickedImageCoords = coords );
    window.setTimeout(()=>this.wrapperState = 'wrapperGrow', 1)
    this.numberOfImages = this.imageService.getImages().length;
  }



  getImageToDisplay(id) {
    this.image = this.imageService.getImage(id);
  }

  setAndSendInfoAboutThisComponent() {
    this.pageTitle = this.image.name;
    this.updateComponentService.setData(this.pageTitle);
  }


  showNewImage() {
    this.move = 'center';
    this.getImageToDisplay(this.imageId)
    this.router.navigateByUrl('/imagedetails/' + this.imageId)
      .then(() => this.setAndSendInfoAboutThisComponent())
  }

  animateCurrentImage(direction) {
    switch (direction) {
      case 'right':
        if (this.imageId === this.numberOfImages - 1) {
          this.imageId = 0;
        } else {
          this.imageId++;
        }
        this.move = 'outRight';
        break;
      case 'left':
        if (this.imageId === 0) {
          this.imageId = this.numberOfImages-1;
        } else {
          this.imageId--;
        }
        this.move = 'outLeft';
        break;
      }
    }

    ngOnDestroy() {
      this.wrapperState = 'no';
      this.imageState= 'no';
      this.imageCoordsSubscription.unsubscribe();
    }

}
