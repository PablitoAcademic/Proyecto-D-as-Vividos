import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Usuario {
  private name:string;
  private result:string;
  private userBirthDate:string;
  constructor(){
    this.name="Abram Sealquiote"
    this.result='6534754387'
    this.userBirthDate='01/01/1800'
  }
  public getName():string{
    return this.name;
  }
  public setName(name:string=""){
    this.name=name;
  }
  public getUserBirthDate(): string{
    return this.userBirthDate;
  }
  public getResult(): string{
    return this.result;
  }
  public setUserBirthDate(birthDate: string){
    if(!this.dateFormatValidation(birthDate)){
      this.result='Formato invalido. usa dd/mm/yyyy';
      return;
    }
    this.userBirthDate = birthDate;
    const partes=this.userBirthDate.split('/');
    const dia=parseInt(partes[0],10);
    const mes=parseInt(partes[1],10)-1;
    const anio=parseInt(partes[2],10);
    const fechaNac=new Date(anio,mes,dia);
    const fechaActual=new Date();
    if (fechaNac>fechaActual) {
      this.result="La fecha no puede ser futura";
      return;
    }
    const diferenciaMes = fechaActual.getTime()
    - fechaNac.getTime();
    const liveDays=Math.floor(diferenciaMes/(1000*60*60*24));
      this.result=`${this.name} with birth date ${this.userBirthDate} has lived ${liveDays} days`;
  }
  public dateFormatValidation(date:string):boolean{
    const regex=/^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(date);
  }
}
