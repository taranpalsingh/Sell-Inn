import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url="/assets/Products.json";
  myOBJ = [
        {
        pId:"1",
        title:"GOT S1",
        description:"Good",
        age: "1",
        links: ["/../../assets/barter.jpg","/../../assets/logo2.jpg"]
        },
        {
        pId:"2",
        title:"GOT S2",
        description:"Better",
        age: "2",
        links: ["https://www.google.com/imgres?imgurl=http%3A%2F%2Fwatchersonthewall.com%2Fwp-content%2Fuploads%2F2019%2F02%2F6.-Arya-Stark-GOT-Season-8-For-The-Throne-Character-Poster-min.jpg&imgrefurl=http%3A%2F%2Fwatchersonthewall.com%2Fcharacter-posters-twitter-emojis-game-thrones-season-8-released%2F&docid=_Z6oBkNHzdbaCM&tbnid=UG8MDRfo8Wi74M%3A&vet=10ahUKEwiM7pCfy9ThAhXciHAKHQ5PDccQMwhEKAQwBA..i&w=2700&h=4800&bih=597&biw=1242&q=got%20s8&ved=0ahUKEwiM7pCfy9ThAhXciHAKHQ5PDccQMwhEKAQwBA&iact=mrc&uact=8","/../../assets/barter.jpg"]
        },
        {
        pId:"3",
        title:"GOT S3",
        description:"Best",
        age: "3",
        links: ["/../../assets/barter.jpg","/../../assets/logo.png", "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwatchersonthewall.com%2Fwp-content%2Fuploads%2F2019%2F02%2F6.-Arya-Stark-GOT-Season-8-For-The-Throne-Character-Poster-min.jpg&imgrefurl=http%3A%2F%2Fwatchersonthewall.com%2Fcharacter-posters-twitter-emojis-game-thrones-season-8-released%2F&docid=_Z6oBkNHzdbaCM&tbnid=UG8MDRfo8Wi74M%3A&vet=10ahUKEwiM7pCfy9ThAhXciHAKHQ5PDccQMwhEKAQwBA..i&w=2700&h=4800&bih=597&biw=1242&q=got%20s8&ved=0ahUKEwiM7pCfy9ThAhXciHAKHQ5PDccQMwhEKAQwBA&iact=mrc&uact=8"]
        },
        {
        pId:"4",
        title:"GOT S8",
        description:"Bestest..............",
        age: "8",
        links: ["/../../assets/logo2.jpg","/../../assets/logo.png", "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwatchersonthewall.com%2Fwp-content%2Fuploads%2F2019%2F02%2F6.-Arya-Stark-GOT-Season-8-For-The-Throne-Character-Poster-min.jpg&imgrefurl=http%3A%2F%2Fwatchersonthewall.com%2Fcharacter-posters-twitter-emojis-game-thrones-season-8-released%2F&docid=_Z6oBkNHzdbaCM&tbnid=UG8MDRfo8Wi74M%3A&vet=10ahUKEwiM7pCfy9ThAhXciHAKHQ5PDccQMwhEKAQwBA..i&w=2700&h=4800&bih=597&biw=1242&q=got%20s8&ved=0ahUKEwiM7pCfy9ThAhXciHAKHQ5PDccQMwhEKAQwBA&iact=mrc&uact=8"]
        }
      ];
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.url);
  }
  getProduct(pId){
    return this.myOBJ[pId-1];
  }
  addProduct(obj){
    console.log(obj);
    // this.myOBJ.splice(0,0,obj);
    return this.http.post(this.url, obj);
  }
}
