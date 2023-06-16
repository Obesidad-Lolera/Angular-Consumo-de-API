import { Component,OnInit } from '@angular/core';
import { ApiAnimalesService } from '../api-animales.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})

export class ListaComponent {
  constructor(private api: ApiAnimalesService) { }

  animales: any[] = [];

 
  ngOnInit(): void {
    this.getAnimales();
  }

  getAnimales() {
    this.api.getAnimales().subscribe(
      resultadoJson => {
        for (const a of (resultadoJson as any)) {
          this.animales.push({
            id: a.id,
            nombre: a.nombre,
            especie: a.especie,
            cantidadDePatas: a.cantidad_de_patas,
            cola: a.cola
          });
        }
        console.log(this.animales);
      });
  }
}
