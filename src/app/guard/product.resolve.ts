import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Product } from '../product/product.component';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductResolve implements Resolve<Product> {
  
  constructor(private router: Router){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let productId: number = route.params["id"];

    if (productId == 1) {
      return new Product(1, "第一个商品", 1.99, 3.5, "这是第一个商品，是我在学习慕课网Angular入门实战时创建的", ["电子产品","硬件设备"]);
    } else {
      this.router.navigate(['/home']);
      return undefined;
    }
  }
}