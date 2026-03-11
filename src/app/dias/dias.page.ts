import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonButton } from '@ionic/angular/standalone';
import { Usuario } from '../services/usuario';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.page.html',
  styleUrls: ['./dias.page.scss'],
  standalone: true,
  imports: [RouterLink, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DiasPage implements OnInit {

  constructor(public usuario:Usuario) { }

  ngOnInit() {
  }

}
