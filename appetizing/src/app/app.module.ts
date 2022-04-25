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
import { DashboardAddAdminComponent } from './dashboard-add-admin/dashboard-add-admin.component';
import { DashboardMealComponent } from './dashboard-meal/dashboard-meal.component';
import { DashboardAddMealComponent } from './dashboard-add-meal/dashboard-add-meal.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'signup' , component: SignupComponent},
  {path: 'recovery' , component: RecoveryPasswordComponent},
  {path: 'food' , component: FoodComponent},
  {path: 'food/:id' , component: FoodComponent},
  {path: 'dash' , component: DashboardAddMealComponent},
  {path: 'checkout' , component: CheckoutComponent}
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
