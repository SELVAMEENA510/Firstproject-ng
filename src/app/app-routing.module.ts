import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BuyComponent } from './buy/buy.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
  path:'', component:HomeComponent
},
{
  path:'about', component:AboutComponent
},
{
  path:'login', component:LoginComponent
},
{
  path:'sign-in', component:SignInComponent
},
{ path: 'buy', component: BuyComponent
},
{
  path: 'payment', component:PaymentComponent
},
{
  path: 'cart', component:CartComponent
},
{
  path: 'profile', component:ProfileComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
