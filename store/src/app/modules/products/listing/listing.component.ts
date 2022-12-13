import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  productList: Product[] = [];
  constructor(private productService: ProductService) {
    this.fetchProductList();
  }

  ngOnInit(): void {
  }

  fetchProductList() {
    this.productService.getProductsList().subscribe(list => {
      this.productList = list;
    })
  }

}
