import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './header/top-header/top-header.component';
import { MaterialModule } from './material/material.module';
import { BottomHeaderComponent } from './header/bottom-header/bottom-header.component';
import { HomeSliderComponent } from './home/home-slider/home-slider.component';
import { HomeBrandsComponent } from './home/home-brands/home-brands.component';
import { HomeComponent } from './home/home.component';
import { HomeBannerTimerComponent } from './home/home-banner-timer/home-banner-timer.component';
import { HomeCategoryComponent } from './home/home-category/home-category.component';
import { HomeTopTrendingComponent } from './home/home-top-trending/home-top-trending.component';
import { HomeBottomTrendingComponent } from './home/home-bottom-trending/home-bottom-trending.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { HomeSpecialProductComponent } from './home/home-special-product/home-special-product.component';
import { HomeRecentStoryComponent } from './home/home-recent-story/home-recent-story.component';
import { HomeServiceComponent } from './home/home-service/home-service.component';
import { FooterComponent } from './footer/footer.component';
import { TopFooterComponent } from './footer/top-footer/top-footer.component';
import { BottomFooterComponent } from './footer/bottom-footer/bottom-footer.component';
import { SubFooterComponent } from './footer/sub-footer/sub-footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CollectionFilterComponent } from './shared/shared-component/collection-filter/collection-filter.component';
import { ProductServiceComponent } from './product-details/product-service/product-service.component';
import { ProductInformationComponent } from './product-details/product-information/product-information.component';
import { TabProductComponent } from './product-details/tab-product/tab-product.component';
import { RelatedProductsComponent } from './product-details/related-products/related-products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { CollectionComponent } from './collection/collection.component';
import { TitleComponent } from './shared/shared-component/title/title.component';
import { CategoryFiltersComponent } from './collection/category-filters/category-filters.component';
import { NewProductComponent } from './shared/shared-component/new-product/new-product.component';
import { CollectionBannerComponent } from './collection/collection-banner/collection-banner.component';
import { ProductsCategorizationComponent } from './collection/products-categorization/products-categorization.component';
import { SidenavComponent } from './header/bottom-header/sidenav/sidenav.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutCardComponent } from './checkout/checkout-card/checkout-card.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    BottomHeaderComponent,
    HomeComponent,
    HomeSliderComponent,
    HomeBrandsComponent,
    HomeBannerTimerComponent,
    HomeCategoryComponent,
    HomeTopTrendingComponent,
    HomeBottomTrendingComponent,
    HomeBannerComponent,
    HomeSpecialProductComponent,
    HomeRecentStoryComponent,
    HomeServiceComponent,
    FooterComponent,
    TopFooterComponent,
    BottomFooterComponent,
    SubFooterComponent,
    ProductDetailsComponent,
    CollectionFilterComponent,
    ProductServiceComponent,
    NewProductComponent,
    ProductInformationComponent,
    TabProductComponent,
    RelatedProductsComponent,
    PageNotFoundComponent,
    CollectionComponent,
    TitleComponent,
    CategoryFiltersComponent,
    CollectionBannerComponent,
    ProductsCategorizationComponent,
    SidenavComponent,
    CheckoutComponent,
    CheckoutCardComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
