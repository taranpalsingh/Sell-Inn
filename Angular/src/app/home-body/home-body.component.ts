import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit {

  SearchText: String;
  myObj: Object;
  constructor(private service: ProductsService) { }

  ngOnInit() {
  }

  SearchChange(Search: HTMLInputElement){
    this.SearchText = Search.value;
    // all this time check the recommendations
  }
  Log(){
    this.service.getProducts()
      .subscribe(data => this.myObj = data);
  }
}
