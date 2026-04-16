import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Suma {

  metodoSuma(a: number, b: number): number {
    return a + b;
  }

}
