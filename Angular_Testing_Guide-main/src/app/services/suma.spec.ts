//EJERCICIO PRUEBAS UNITARIAS - KARMA - JASMINE
import { TestBed } from "@angular/core/testing"; //Configura e inicializa entorno de pruebas
import {Suma} from './suma'; //El servicio que quiero probar

/*
  BLOQUE DE PRUEBAS: Agrupa las pruebas que usted quiera hacerle a una función
  **describe

  CASO DE PRUEBAS: Un falso caso individual que quiere testear
*/

/*
  1. Definir el bloque de pruebas con DESCRIBE
  2. Configurar su entorno con TESBED y definir el servicio que quieren probar
  3. Definir el caso de prueba

*/

//1. Definir bloque de pruebas
describe('Bloque de pruebas: Método Suma', ()=>{

  //2. Configurar entorno de pruebas
  let service: Suma;

  //Coja mi metodo Suma y llevelo al entorno  de pruebas
  beforeEach(()=>{
    TestBed.configureTestingModule({});
    service = TestBed.inject(Suma);
  });

  //3. Definir caso de prueba
  it("Debería sumar dos numeros positivos.",()=>{
    expect(service.metodoSuma(3,2)).toBe(5); //Define lo que debe pasar
  });

  it("Debería sumar dos numeros negativos.",()=>{
    expect(service.metodoSuma(-3,-5)).toBe(-8);
  });

  it("Debería sumar dos numeros que sea uno positivo y uno negativos.",()=>{
    expect(service.metodoSuma(-3, 5)).toBe(2);
  });

});
