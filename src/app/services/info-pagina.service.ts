import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina = {};
  cargada=false;

  constructor(private http:HttpClient) {

    console.log('Servicio de infopagina listo');

    //Leer archivo json que se encuentra en assets/data/data-pagina.json
    /*para mostrar las propiedades personalizables ejemplo resp.email se debe encerrar la respuesta entre()
    y colocarle el tipo de dato que en este caso es la interfaces */
    this.http.get('assets/data/data-pagina.json')
             .subscribe((resp:InfoPagina) => {
              this.cargada=true;
              this.info=resp;
                console.log(resp);
             })
   }
}
