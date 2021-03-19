import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  resultado: string = '';
  calculadora: string[] = [];
  canWrite = true;

  /**
   * 
   * @param n
   */
  marcaNumero(n: string): void {
    if (this.canWrite) {
      this.resultado += n;
    } else {
      alert("Seleccione en primer lugar un operador.");
    }
  }

  /**
   * 
   * @param op 
   */
  operacion(op: string): void {

    if (this.calculadora.length === 2) {
      this.final();
    }

    if (this.resultado != '') {
      this.calculadora.push(this.resultado);
      this.calculadora.push(op);
      this.resultado = '';
      this.canWrite = true;
    } else {
      alert("Indique en primer lugar un operando.");
    }
  }

  final(): void {
    
    if (this.resultado != '') {
      this.calculadora.push(this.resultado);

      switch(this.calculadora[1]) {
        case 'x': {
          this.resultado = (parseInt(this.calculadora[0]) * parseInt(this.calculadora[2])).toString();
          break;
        }
        case '+': {
          this.resultado = (parseInt(this.calculadora[0]) + parseInt(this.calculadora[2])).toString();
          break;
        }
        case '-': {
          this.resultado = (parseInt(this.calculadora[0]) - parseInt(this.calculadora[2])).toString();
          break;
        }
       }

       this.canWrite = false;
       this.resetArray();
      }
  }

  limpiar():void {
    this.resultado = '';
    this.canWrite = true;
    this.resetArray();
  }

  resetArray():void {
    this.calculadora.length = 0;
  }

}