import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  pId: number;
  array = ['d','f','g'];
  myObj: Object;

  constructor(private route: ActivatedRoute,
              private service: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {


      this.pId = +params['pId']; // (+) converts string 'id' to a number
      console.log(params['pId']);

      this.myObj = this.service.getProduct(this.pId);
      console.log(this.myObj);
    });
  }


}
