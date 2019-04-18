import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  obj;
  constructor(private service: ProductsService) { }

  ngOnInit() {
  }
  Add(f){
    console.log(f);
    this.obj={
      pId: f.value.pId,
      title: f.value.title,
      age: f.value.age,
      description: f.value.description,
      link: f.value.link
    }
    console.log(this.obj);
    this.service.addProduct(this.obj);
  }
}
