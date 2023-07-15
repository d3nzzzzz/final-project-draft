import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pendapp',
  templateUrl: './pendapp.page.html',
  styleUrls: ['./pendapp.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PendappPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
