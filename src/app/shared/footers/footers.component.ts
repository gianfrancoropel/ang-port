import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footers',
  templateUrl: './footers.component.html',
  styleUrls: ['./footers.component.css']
})
export class FootersComponent implements OnInit {
    anio: number =new Date().getFullYear();
    constructor(public _servicio: InfoPaginaService) {

   }

  ngOnInit() {
  }

}
