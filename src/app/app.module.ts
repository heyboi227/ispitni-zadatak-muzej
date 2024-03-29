import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, CacheInterceptor } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './nav/nav.component';
import { CommonExhibitionsComponent } from './common-exhibitions/common-exhibitions.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RatingModule } from 'ng-starrating';
import { UserService } from './user.service';
import { ExhibitionService } from './exhibition.service';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FavoriteExhibitionsComponent } from './favorite-exhibitions/favorite-exhibitions.component';
import { CartComponent } from './cart/cart.component';
import { PlannerComponent } from './planner/planner.component';
import { ExhibitsComponent } from './exhibits/exhibits.component';
import { RatingService } from './rating.service';
import { CommentsComponent } from './comments/comments.component';
import { AboutComponent } from './about/about.component';
import { EditTourComponent } from './edit-tour/edit-tour.component';
import { ShowExhibitsComponent } from './show-exhibits/show-exhibits.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TourService } from './tour.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoComponent,
    NavComponent,
    CommonExhibitionsComponent,
    FooterComponent,
    ProfileComponent,
    SignupComponent,
    LoginComponent,
    ExhibitionsComponent,
    FavoriteExhibitionsComponent,
    CartComponent,
    PlannerComponent,
    ExhibitsComponent,
    CommentsComponent,
    AboutComponent,
    EditTourComponent,
    ShowExhibitsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    RatingModule,
    MatCheckboxModule,
  ],
  providers: [UserService, ExhibitionService, RatingService, TourService, { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
