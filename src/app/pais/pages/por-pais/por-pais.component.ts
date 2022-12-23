import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
termino: string = '';
hayError: boolean = false;

constructor( private paisService: PaisService){}

buscar(){
 
  console.log(this.termino);
  this.paisService.buscarPais(this.termino).subscribe(resp => {
    this.hayError = false;
    console.log(resp)
  }, (err) => {
    this.hayError = true;
    console.log('Error')
    console.log(err)
  })
}
}
