import { Component,OnInit } from '@angular/core';
import { ApiAnimalesService } from '../api-animales.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  constructor(private api: ApiAnimalesService) { }

  public result: any;


  updateHTML(objetoCreado: any){
    this.result = objetoCreado;
  }

  crearAnimal(data: any) {
    this.api.createAnimal(data).subscribe((resultadoPOST) => {
      this.updateHTML(resultadoPOST);
    });
  }
}
