import { Component,OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {HomeComponent} from '../home/home.component';
@Component({
  selector: 'app-reservation-list',
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    HomeComponent
  ],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit {



constructor(private reservationService: ReservationService) {


}


  reservations: Reservation[] = [];

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }


  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id);
    this.reservations = this.reservationService.getReservations();

  }
}
