import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Product } from '../../Core/Services/Products/product';
import { Products } from '../../Shared/interfaces/products';
import { RouterLink } from '@angular/router';
import { SearchPipe } from '../../Shared/Pipes/Search/search-pipe';
import { Search } from '../../Core/Services/Search/search';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SearchPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private readonly product = inject(Product);
  readonly search = inject(Search);
  allProduct: WritableSignal<Products[]> = signal([]);
  ngOnInit(): void {
    this.getProduts();
  }
  getProduts() {
    this.product.getProduct().subscribe({
      next: (value) => {
        this.allProduct.set(value);
      },
    });
  }
}
