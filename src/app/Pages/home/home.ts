import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Product } from '../../Core/Services/Products/product';
import { Products } from '../../Shared/interfaces/products';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private readonly product = inject(Product)
  allProduct:WritableSignal<Products[]> = signal([])
ngOnInit(): void {
this.getProduts()
}
getProduts(){
this.product.getProduct().subscribe({
  next:(value)=> {
    this.allProduct.set(value)
  },
})
}
}
