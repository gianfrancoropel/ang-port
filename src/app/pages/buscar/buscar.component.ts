import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor( private Route:ActivatedRoute ,
               public productosService:ProductosService) { }

  ngOnInit() {
    this.Route.params
    .subscribe(params=>{
      console.log();
      this.productosService.buscarProducto(params['termino']);
    });
  }
}
