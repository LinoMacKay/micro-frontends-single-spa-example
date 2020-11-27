import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { AngularComponent } from "./angular/angular.component";
import { HomeComponent } from "src/_pages/home/home.component";
import { ProductComponent } from "src/_pages/product/product.component";
import { ProductcategoryComponent } from "src/_pages/productcategory/productcategory.component";
import { ClientsComponent } from "src/_pages/clients/clients.component";
import { OrderComponent } from "src/_pages/order/order.component";

const routes: Routes = [
  {
    path: "angular",
    component: AngularComponent,
  },
  {
    path: "angular/home",
    component: HomeComponent,
  },
  {
    path: "angular/products",
    component: ProductComponent,
  },
  {
    path: "angular/product_categories",
    component: ProductcategoryComponent,
  },
  {
    path: "angular/clients",
    component: ClientsComponent,
  },
  {
    path: "angular/orders",
    component: OrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule {}
