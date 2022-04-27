import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from "ngx-intl-tel-input";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
//import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardAddAdminComponent } from './dashboard-add-admin/dashboard-add-admin.component';
import { DashboardAddDrinkComponent } from './dashboard-add-drink/dashboard-add-drink.component';
import { DashboardAddItemComponent } from './dashboard-add-item/dashboard-add-item.component';
import { DashboardAddMealComponent } from './dashboard-add-meal/dashboard-add-meal.component';
import { DashboardAddOrderComponent } from './dashboard-add-order/dashboard-add-order.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardDrinksComponent } from './dashboard-drinks/dashboard-drinks.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardItemsComponent } from './dashboard-items/dashboard-items.component';
import { DashboardLoginComponent } from './dashboard-login/dashboard-login.component';
import { DashboardMealComponent } from './dashboard-meal/dashboard-meal.component';
import { DashboardOrderComponent } from './dashboard-order/dashboard-order.component';
import { DashboardUpdateAdminComponent } from './dashboard-update-admin/dashboard-update-admin.component';
import { DashboardUpdateDrinkComponent } from './dashboard-update-drink/dashboard-update-drink.component';
import { DashboardUpdateItemComponent } from './dashboard-update-item/dashboard-update-item.component';
import { DashboardUpdateMealComponent } from './dashboard-update-meal/dashboard-update-meal.component';
import { DashboardUpdateOrderComponent } from './dashboard-update-order/dashboard-update-order.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';



const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'signup' , component: SignupComponent},
  {path: 'recovery' , component: RecoveryPasswordComponent},
  {path: 'food' , component: FoodComponent},
  {path: 'food/:id' , component: FoodComponent},
 // {path: 'checkout' , component: CheckoutComponent},
  {path: 'dashboard-add-admin' , component: DashboardAddAdminComponent},
  {path: 'dashboard-add-drink' , component: DashboardAddDrinkComponent},
  {path: 'dashboard-add-item' , component: DashboardAddItemComponent},
  {path: 'dashboard-add-meal' , component: DashboardAddMealComponent},
  {path: 'dashboard-add-order' , component: DashboardAddOrderComponent},
  {path: 'dashboard-admin' , component: DashboardAdminComponent},
  {path: 'dashboard-drinks' , component: DashboardDrinksComponent},
  {path: 'dashboard-home' , component: DashboardHomeComponent},
  {path: 'dashboard-items' , component: DashboardItemsComponent},
  {path: 'dashboard-login' , component: DashboardLoginComponent},
  {path: 'dashboard-meal' , component: DashboardMealComponent},
  {path: 'dashboard-order' , component: DashboardOrderComponent},
  {path: 'dashboard-update-admin' , component: DashboardUpdateAdminComponent},
  {path: 'dashboard-update-drink' , component: DashboardUpdateDrinkComponent},
  {path: 'dashboard-update-item' , component: DashboardUpdateItemComponent},
  {path: 'dashboard-update-meal' , component: DashboardUpdateMealComponent},
  {path: 'dashboard-update-order' , component: DashboardUpdateOrderComponent},
  {path: 'dashboard-user' , component: DashboardUserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    FoodComponent,
    RecoveryPasswordComponent,
    DashboardAddAdminComponent,
    DashboardAddDrinkComponent,
    DashboardAddItemComponent,
    DashboardAddMealComponent,
    DashboardAddOrderComponent,
    DashboardAdminComponent,
    DashboardDrinksComponent,
    DashboardHomeComponent,
    DashboardItemsComponent,
    DashboardLoginComponent,
    DashboardMealComponent,
    DashboardOrderComponent,
    DashboardUpdateAdminComponent,
    DashboardUpdateDrinkComponent,
    DashboardUpdateItemComponent,
    DashboardUpdateMealComponent,
    DashboardUpdateOrderComponent, 
    DashboardUserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxIntlTelInputModule,
		ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
