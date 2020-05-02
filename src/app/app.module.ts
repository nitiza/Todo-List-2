import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const ROUTES: Routes = [
  {path:"" , component: HomeComponent},
  {path:'details' , component:DetailsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
