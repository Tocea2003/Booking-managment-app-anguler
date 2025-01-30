import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';
import { routes } from './app.routes';

@NgModule({
  declarations: [

  ],
  imports: [
    AppComponent,
    BrowserModule,

    RouterModule.forRoot(routes),
    HomeModule,
    ReservationModule,
  ],
  providers: [

  ]
})
export class AppModule { }
