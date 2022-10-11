import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  formCreate!: FormGroup

  constructor(
    private productsService: ProductsService,
    private builder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onFormCreate()
  }

  onFormCreate() {
    
    this.formCreate = this.builder.group({
      name: [null, Validators.required],
      price: [null, Validators.required]
    })
  }

  createProduct(): void {
    this.productsService.create(this.formCreate.value).subscribe(() => {
      this.productsService.showMessage('Produto Criado!')
      this.router.navigate(['/products'])
    })   
  }

  cancelaProduct(){
    this.formCreate.reset()
    this.router.navigate(['/products'])
  }

}
