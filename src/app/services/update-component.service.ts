import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UpdateComponentService {

  private dataObs = new BehaviorSubject<any>('');

  getData() {
    return this.dataObs.asObservable();
  }

  setData(data) {
    this.dataObs.next(data);
  }

}
