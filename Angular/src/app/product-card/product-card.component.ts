import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() title: String;
  @Input() age: String;
  @Input() description: String;
  @Input() link: String;

  constructor() { }

  ngOnInit() {
    // this.title="GOT";
    // this.age="8";
    // this.description="Bestest";
    // this.link="https";
    console.log(this.title);
    console.log(this.age);
    console.log(this.description);
    console.log(this.link);
  }


}
