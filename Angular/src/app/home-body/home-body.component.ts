import { Component, OnInit} from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit{

  edit: boolean;
  SearchInput: String;
  myObj: Object;
  suggestions: any[];

  constructor(private service: ProductsService) { }

  ngOnInit(){
    this.service.getProducts()
      .subscribe(data => {
        this.myObj = data;
      })
  }
  SearchChange(Search: HTMLInputElement){
    if(this.SearchInput != ""){
      this.service.getSuggestions(this.SearchInput)
        .subscribe((data: any[])  => {
          let s = [];
          data.map(function(element){
            s.push(String(element.name));
          })
          this.suggestions = s;
      })
    }
  }

  selectSuggestion(item){
    this.SearchInput = item;
    console.log("Inside suggestions");

    this.service.getProductByKey(item)
      .subscribe(data => {
        this.myObj = data;
      })
  }

  edit2(){

    setTimeout( () => {
      console.log("Inside Edit2()");
      console.log(this.edit);
      this.edit = false;
      console.log(this.edit);
    }, 100);

  }

}
