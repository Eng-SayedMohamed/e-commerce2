import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Product } from '../../Core/Services/Products/product';
import { ActivatedRoute } from '@angular/router';
import { SingleProduct } from '../../Shared/interfaces/single-product';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  private readonly product = inject(Product);
  private readonly activatedRoute = inject(ActivatedRoute);
  id: WritableSignal<string | null> = signal(null);
  productData: WritableSignal<SingleProduct> = signal({} as SingleProduct);
  ngOnInit(): void {
    this.getId();
  }
  getId() {
    this.activatedRoute.paramMap.subscribe({
      next: (value) => {
        this.id.set(value.get('id')!);

        this.getData();
      },
    });
  }
  getData() {
    this.product.getSingleProduct(this.id()!).subscribe({
      next: (res) => {
        this.productData.set(res);
        console.log(res);
      },
    });
  }
}
