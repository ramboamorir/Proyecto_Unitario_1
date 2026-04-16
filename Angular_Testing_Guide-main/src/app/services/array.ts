import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Array {

  metodoContiene(numbers: number[], value: number): boolean {
    return numbers.includes(value);
  }
  
}
