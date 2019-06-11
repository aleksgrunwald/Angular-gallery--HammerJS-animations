import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'favouriteFilter'})
export class FavouritePipe implements PipeTransform {
  transform(images:  any[], criteria: boolean): any {
    if(criteria == false) {
      return images;
    } else {
      return images.filter(image => {
        return image.favourite == true;
      })
    }
  }
}
