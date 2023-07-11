import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FidelService {
  private fidelSubject = new Subject<string>();
  fidelData$ = this.fidelSubject.asObservable();
  constructor() { }

  setFidel(fidel: string) {
    this.fidelSubject.next(fidel);
  }
}
