import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit {

  SearchText: String;
  myObj;
  constructor() { }

  ngOnInit() {
  }

  SearchChange(Search: HTMLInputElement){
    this.SearchText = Search.value;
    console.log(this.SearchText);
    // all this time check the recommendations
  }
  Log(){
    console.log("Inside Enter");
    this.myObj =
    [
      {
      title:"'GOT S1'",
      description:"'Good'",
      age: "1",
      link: "'https://www.google.com/imgres?imgurl=http%3A%2F%2Fwatchersonthewall.com%2Fwp-content%2Fuploads%2F2019%2F02%2F6.-Arya-Stark-GOT-Season-8-For-The-Throne-Character-Poster-min.jpg&imgrefurl=http%3A%2F%2Fwatchersonthewall.com%2Fcharacter-posters-twitter-emojis-game-thrones-season-8-released%2F&docid=_Z6oBkNHzdbaCM&tbnid=UG8MDRfo8Wi74M%3A&vet=10ahUKEwiM7pCfy9ThAhXciHAKHQ5PDccQMwhEKAQwBA..i&w=2700&h=4800&bih=597&biw=1242&q=got%20s8&ved=0ahUKEwiM7pCfy9ThAhXciHAKHQ5PDccQMwhEKAQwBA&iact=mrc&uact=8"
      },
      {
      title:"'GOT S2'",
      description:"'Better'",
      age: "2",
      link: "'https://www.google.com/imgres?imgurl=http%3A%2F%2Fwatchersonthewall.com%2Fwp-content%2Fuploads%2F2019%2F02%2F6.-Arya-Stark-GOT-Season-8-For-The-Throne-Character-Poster-min.jpg&imgrefurl=http%3A%2F%2Fwatchersonthewall.com%2Fcharacter-posters-twitter-emojis-game-thrones-season-8-released%2F&docid=_Z6oBkNHzdbaCM&tbnid=UG8MDRfo8Wi74M%3A&vet=10ahUKEwiM7pCfy9ThAhXciHAKHQ5PDccQMwhEKAQwBA..i&w=2700&h=4800&bih=597&biw=1242&q=got%20s8&ved=0ahUKEwiM7pCfy9ThAhXciHAKHQ5PDccQMwhEKAQwBA&iact=mrc&uact=8"
      },
      {
      title:"'GOT S3'",
      description:"'Best'",
      age: "3",
      link: "'https://www.google.com/imgres?imgurl=http%3A%2F%2Fwatchersonthewall.com%2Fwp-content%2Fuploads%2F2019%2F02%2F6.-Arya-Stark-GOT-Season-8-For-The-Throne-Character-Poster-min.jpg&imgrefurl=http%3A%2F%2Fwatchersonthewall.com%2Fcharacter-posters-twitter-emojis-game-thrones-season-8-released%2F&docid=_Z6oBkNHzdbaCM&tbnid=UG8MDRfo8Wi74M%3A&vet=10ahUKEwiM7pCfy9ThAhXciHAKHQ5PDccQMwhEKAQwBA..i&w=2700&h=4800&bih=597&biw=1242&q=got%20s8&ved=0ahUKEwiM7pCfy9ThAhXciHAKHQ5PDccQMwhEKAQwBA&iact=mrc&uact=8"
      },
      {
      title:"'GOT S8'",
      description:"'Bestest..............'",
      age: "8",
      link: "'https://www.google.com/imgres?imgurl=http%3A%2F%2Fwatchersonthewall.com%2Fwp-content%2Fuploads%2F2019%2F02%2F6.-Arya-Stark-GOT-Season-8-For-The-Throne-Character-Poster-min.jpg&imgrefurl=http%3A%2F%2Fwatchersonthewall.com%2Fcharacter-posters-twitter-emojis-game-thrones-season-8-released%2F&docid=_Z6oBkNHzdbaCM&tbnid=UG8MDRfo8Wi74M%3A&vet=10ahUKEwiM7pCfy9ThAhXciHAKHQ5PDccQMwhEKAQwBA..i&w=2700&h=4800&bih=597&biw=1242&q=got%20s8&ved=0ahUKEwiM7pCfy9ThAhXciHAKHQ5PDccQMwhEKAQwBA&iact=mrc&uact=8"
      }
    ];
    console.log(this.myObj);
  }
}
