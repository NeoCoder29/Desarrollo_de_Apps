import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OperationHistoryComponent } from '../operation-history/operation-history';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule, OperationHistoryComponent],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class CalculatorComponent {
  numero1: number | null = null;
  numero2: number | null = null;
  operacion = '+';
  resultado: number | null = null;

  historial: string[] = [];

  calcular(): void {
    if (this.numero1 === null || this.numero2 === null) {
      alert('Escribe los dos números antes de calcular.');
      return;
    }

    switch (this.operacion) {
      case '+':
        this.resultado = this.numero1 + this.numero2;
        break;

      case '-':
        this.resultado = this.numero1 - this.numero2;
        break;

      case '*':
        this.resultado = this.numero1 * this.numero2;
        break;

      case '/':
        if (this.numero2 === 0) {
          alert('No es posible dividir entre cero.');
          this.resultado = null;
          return;
        }

        this.resultado = this.numero1 / this.numero2;
        break;
    }

    const operacionRealizada =
      `${this.numero1} ${this.operacion} ${this.numero2} = ${this.resultado}`;

    this.historial.unshift(operacionRealizada);
  }

  limpiar(): void {
    this.numero1 = null;
    this.numero2 = null;
    this.operacion = '+';
    this.resultado = null;
  }

  borrarHistorial(): void {
    this.historial = [];
  }
}