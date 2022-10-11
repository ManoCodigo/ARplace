import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ProductsCreateComponent } from "../products-create.component";

@Injectable({
  providedIn: 'root'
})

export class FormsDeactivateGuard implements CanDeactivate<ProductsCreateComponent> {

  constructor() {}

  canDeactivate(
    component: ProductsCreateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
  ): Observable<boolean> | boolean
    {
      if (component.formCreate.dirty) {
        let mudaRota = confirm('Os dados preenchidos serão perdidos, deseja realmente sair?')
        return mudaRota ? true : false

      }
      return true
    }
}
