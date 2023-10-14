import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tiempo: number = 0;
  gravedad: number = 0;
  resultado: number = 0;
  resultadoTexto: string = '';

  calcularAltura(): void {
    const tiempoInput = <HTMLInputElement>document.getElementById('tiempo');
    const gravedadInput = <HTMLInputElement>document.getElementById('gravedad');
    this.tiempo = parseFloat(tiempoInput.value);
    this.gravedad = parseFloat(gravedadInput.value);

    this.resultado = (this.gravedad * Math.pow(this.tiempo, 2)) / 2;
    this.resultadoTexto = 'La altura calculada en metros es: ' + this.resultado.toFixed(2);
  }

  calcularVelocidad(): void {
    const tiempoInput = <HTMLInputElement>document.getElementById('tiempo');
    const gravedadInput = <HTMLInputElement>document.getElementById('gravedad');
    this.tiempo = parseFloat(tiempoInput.value);
    this.gravedad = parseFloat(gravedadInput.value);

    this.resultado = this.gravedad * this.tiempo;
    this.resultadoTexto = 'La velocidad calculada en metros por segundo es: ' + this.resultado.toFixed(2);
  }
}

