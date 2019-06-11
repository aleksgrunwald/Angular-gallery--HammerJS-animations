import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ChosenImageCoordinatesService {

  private coords = new BehaviorSubject<any>({});

  getData() {
    return this.coords.asObservable();
  }

  setData(coords) {
    this.coords.next(coords);
  }

}

