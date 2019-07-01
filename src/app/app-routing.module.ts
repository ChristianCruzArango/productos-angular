import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

/*todas las rutas se crean como un arreglo y se indica como un objeto el path y el nombre del componente */
 const app_routes:Routes=[
   {path:'home'      ,component:PortafolioComponent},
   {path:'about',component:AboutComponent},
   {path:'item/:id',component:ItemComponent},
   {path:'**',pathMatch:'full', redirectTo:'home'},/*significa que si se ingresa a una ruta que no esta definida se dirija  */
 ];


@NgModule({
  imports:[
    /*el forRoot significa las rutas padres y el useHash significa el # que envia primeramente en la pagina
    al momento de dar click en una ruta */
    RouterModule.forRoot(app_routes,{useHash:true})
  ],
  /*para poder utilizar las rutas se debe exportar el RouteModule que se crea */
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {}

