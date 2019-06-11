import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  imagesBaseUrl: String = "/assets/photos/";

  getImages() {
    let myImages = [];
    images.forEach((image) => {
      image.src = this.imagesBaseUrl + image.fileName;
      myImages.push(image);
    });
    return myImages;
  }

  getImage(id: number) {
    return this.getImages().find(image => image.id == id);
  }
}


let images = [
  {id: 0, name: 'Cat ROYAL highness', alt: 'An image. MAJESTIICC CAT CAT.', fileName: 'cat-majestic.jpg',  src: '', favourite: false},
  {id: 1, name: 'CAT2', alt: 'CAT2.', fileName: 'cat2.jpg', src: '', favourite: false},
  {id: 2, name: 'Dancing queen', alt: 'He is a dancing queen.', fileName: 'dance-dance.jpg', src: '', favourite: true},
  {id: 3, name: 'Blue', alt: 'Im blue.. da bu dee.. ', fileName: 'sad.jpg', src: '', favourite: false},
  {id: 4, name: 'Baby kitty', alt: 'Baby kitty.', fileName: 'baby.jpg', src: '', favourite: true},
  {id: 5, name: 'Cat ROYAL highness', alt: 'An image. MAJESTIICC CAT CAT.', fileName: 'cat-majestic.jpg',  src: '', favourite: true},
  {id: 6, name: 'CAT2', alt: 'CAT2.', fileName: 'cat2.jpg', src: '', favourite: true},
  {id: 7, name: 'Dancing queen', alt: 'He is a dancing queen.', fileName: 'dance-dance.jpg', src: '', favourite: false},
  {id: 8, name: 'Blue', alt: 'Im blue.. da bu dee.. ', fileName: 'sad.jpg', src: '', favourite: false},
  {id: 9, name: 'Baby kitty', alt: 'Baby kitty.', fileName: 'baby.jpg', src: '', favourite: false}
];




