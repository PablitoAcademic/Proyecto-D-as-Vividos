import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonText } from '@ionic/angular/standalone';
import { Usuario } from '../services/usuario';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonText, RouterLink, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton]
})
export class HomePage {
  userName:string;
  userBirthDate:string;
  constructor(public usuario: Usuario) {
    this.userName='';
    this.userBirthDate='';
  }
  setUsuarioName(event: any){
    this.usuario.setName(this.userName);
  }
    setUsuarioBirthDate(event: any){
    this.usuario.setUserBirthDate(this.userBirthDate);
  }
}
