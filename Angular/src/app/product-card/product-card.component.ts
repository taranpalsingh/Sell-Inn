import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() myOBJ;

  constructor(private router: Router) { }

  ngOnInit() {
    // console.log(this.myOBJ);
  }

  goToProduct(pId){
    this.router.navigate(['/product',pId]);
  }
}
