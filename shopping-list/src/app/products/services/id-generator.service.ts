import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdGeneratorService {

  constructor() {
  }

  generateRandomValueId(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  getRandomNumberId() {
    return Math.floor((Math.random() * 6) + 1);
  }
}
