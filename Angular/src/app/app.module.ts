import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

const appRoute: Routes =[
  {
    path: '',
    component: FeedComponent
  },
  {
    path: 'home',
    component: FeedComponent
  },
  {
    path: 'product/:pId',
    component: ProductPageComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeBodyComponent,
    ProductCardComponent,
    FeedComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
