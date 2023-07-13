import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.page.html',
  styleUrls: ['./viewappointment.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ViewappointmentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
