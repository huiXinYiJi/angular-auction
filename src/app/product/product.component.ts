import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  private productId: number;

  private productName: string;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.routeInfo, this.routeInfo.snapshot);
    // // this.productId = this.routeInfo.snapshot.queryParams["id"];

    // //{ path: 'product/:id', component: ProductComponent },
    // // this.productId = this.routeInfo.snapshot.params["id"];

    // // 订阅
    // this.routeInfo.params.subscribe((params: Params) => this.productId = params["id"]);

    // this.routeInfo.data.subscribe((data: {product: Product}) => {
    //   this.productId = data.product.id;
    //   this.productName = data.product.title;
    // });

    this.products = [
      new Product(1, "第一个商品", 1.99, 3.5, "这是第一个商品，是我在学习慕课网Angular入门实战时创建的", ["电子产品","硬件设备"]),
      new Product(2, "第二个商品", 2.99, 4.5, "这是第二个商品，是我在学习慕课网Angular入门实战时创建的", ["电子产品","硬件设备"]),
      new Product(3, "第三个商品", 3.99, 2.5, "这是第三个商品，是我在学习慕课网Angular入门实战时创建的", ["硬件设备"]),
      new Product(4, "第四个商品", 4.99, 1.5, "这是第四个商品，是我在学习慕课网Angular入门实战时创建的", ["电子产品","硬件设备"]),
      new Product(5, "第一个商品", 5.99, 2.5, "这是第五个商品，是我在学习慕课网Angular入门实战时创建的", ["电子产品"]),
      new Product(6, "第一个商品", 6.99, 3.5, "这是第六个商品，是我在学习慕课网Angular入门实战时创建的", ["图书"])
    ]
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