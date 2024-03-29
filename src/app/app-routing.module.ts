import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { ExhibitsComponent } from './exhibits/exhibits.component';
import { FavoriteExhibitionsComponent } from './favorite-exhibitions/favorite-exhibitions.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlannerComponent } from './planner/planner.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'view', component: ExhibitionsComponent },
  { path: 'favorites', component: FavoriteExhibitionsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'planner', component: PlannerComponent },
  { path: 'view-exhibits', component: ExhibitsComponent },
  { path: 'about', component: AboutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
