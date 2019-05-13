import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProduct(): Product {
    return new Product(1, "第一个商品", 1.99, 3.5, "这是第一个商品，是我在学习慕课网Angular入门实战时创建的", ["电子产品","硬件设备"]);
  }
}

export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public category:Array<string>
  ) {}
}
