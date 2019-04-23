import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
// import { Iproducts } from '../Products';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  obj;
  constructor(private service: ProductsService) { }

  ngOnInit() {
  }
  Add(f){
    console.log(f);
    this.obj={
      item: f.value.item,
      age: f.value.age,
      email: f.value.email,
      keywords: f.value.keyword.split(';'),
      description: f.value.description,
      link: f.value.link.split(';')
    }
    console.log(this.obj);
    this.service.addProduct(this.obj)
      .subscribe(data => {
        let myObj = data;
        alert('Added');
      });
  }
}
