import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route:ActivatedRoute,public productosService:ProductosService) { }

  ngOnInit() {

    /*para recibir los parametros se utiliza el activedroute */
    this.route.params.subscribe(params => {
      /*como se coloca en el archivo de rutas asi mismo se debe capturar el dato aqui */
      this.productosService.buscarProducto(params['termino']);
    });
  }

}
