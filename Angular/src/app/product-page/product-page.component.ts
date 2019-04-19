import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  _id: String;
  array = ['d','f','g'];
  myObj: Object;
  received: Number = 0 ; // If data is received or not

  constructor(private route: ActivatedRoute,
              private service: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // this._id = +params['_id']; // (+) converts string 'id' to a number
      this._id = params['_id']; // (+) converts string 'id' to a number
      console.log(this._id);

      this.service.getProductById(this._id)
        .subscribe(data => {
          this.myObj = data
          this.received = 1;
          console.log(this.myObj);
        });
      // console.log(this.myObj);
    });
  }


}
