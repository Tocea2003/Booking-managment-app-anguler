import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {ReservationService} from '../reservation/reservation.service';
import {Reservation} from '../models/reservation';
import {Router, ActivatedRoute} from '@angular/router';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-reservation-form',
  imports: [
    ReactiveFormsModule,
    NgIf,
    HomeComponent
  ],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    })
    let id = this.activatedRoute.snapshot.paramMap.get('id')

    if (id) {
      let reservation = this.reservationService.getReservation(id)
      if (reservation) {
        this.reservationForm.patchValue(reservation);
      }
    }

  }

  onSubmit() {
    if (this.reservationForm.valid) {
      const reservation: Reservation = this.reservationForm.value;
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.reservationService.updateReservation(id, reservation);
      } else {
        this.reservationService.addReservation(reservation);
      }
      this.router.navigate(['/list']);
    }
  }
}
