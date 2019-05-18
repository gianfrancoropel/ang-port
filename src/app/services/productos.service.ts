import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interfaces/producto.interface';
import { promise } from 'protractor';
import { reject } from 'q';
import { resolve } from 'dns';
@Injectable({
  providedIn: 'root'
})

export class ProductosService {
cargando = true;
productos:Products[]=[];
pruductosFiltrados: Products[]=[]
  constructor(private http: HttpClient) {
    this.cargarProductos();

  }

    private cargarProductos(){
      return new Promise( (resolve,reject) => {
        this.http.get('https://angular-html-27640.firebaseio.com/productos_idx.json')
        .subscribe((resp:Products[])=>{
          this.productos = resp;
            this.cargando=false;
            resolve();
        });        
      })


    }
    getProducto(id:string){
     return this.http.get(`https://angular-html-27640.firebaseio.com/productos/${id}.json` )
    };

    buscarProducto(termino:string){
      this.pruductosFiltrados=this.productos.filter(producto=>{
        return true;
      })
      if (this.productos.length===0) {
      this.cargarProductos().then( ()=>{

        this.filtrarProductos(termino);
      });
      } else {
        this.filtrarProductos(termino);
      };
     }
     private filtrarProductos( termino: string ) {

      // console.log(this.productos);
      this.pruductosFiltrados = [];
  
      termino = termino.toLocaleLowerCase();
  
      this.productos.forEach( prod => {
  
        const tituloLower = prod.titulo.toLocaleLowerCase();
  
        if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0  ) {
          this.pruductosFiltrados.push( prod );
        }
  
      });
  
  
    }
  
    };