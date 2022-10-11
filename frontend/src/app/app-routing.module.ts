import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { ProductsCrudComponent } from './views/products-crud/products-crud.component'
import { ProductUpdateComponent } from './components/products/product-update/product-update.component'
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';
import { ProductDeleteComponent } from './components/products/product-delete/product-delete.component';
import { FormsDeactivateGuard } from './components/products/products-create/guards/canDeactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsCrudComponent
  },
  {
    path: 'products/create',
    component: ProductsCreateComponent,
    canDeactivate: [FormsDeactivateGuard]
  },
  {
   path: 'products/update/:id',
   component: ProductUpdateComponent
  },
  {
   path: 'products/delete/:id',
   component: ProductDeleteComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
