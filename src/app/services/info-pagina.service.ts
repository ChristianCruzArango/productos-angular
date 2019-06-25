import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina = {};
  cargada=false;
  equipo: any[] = [];

  constructor(private http:HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();
   }

   private cargarInfo(){
      //Leer archivo json que se encuentra en assets/data/data-pagina.json
    /*para mostrar las propiedades personalizables ejemplo resp.email se debe encerrar la respuesta entre()
    y colocarle el tipo de dato que en este caso es la interfaces */
    this.http.get('assets/data/data-pagina.json')
             .subscribe((resp:InfoPagina) => {
              this.cargada=true;
              this.info=resp;
                //console.log(resp);
             });
   }

   private cargarEquipo(){
    this.http.get('https://angular-html-7b738.firebaseio.com/equipo.json')
          .subscribe((resp:any[])=>{
            this.equipo = resp;
            // console.log(resp);
          });
   }

}


