import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  expiraData: Date;

  constructor() { }

  verificaDataExpiracao(dataExpiracao: Date) {
    // formato 2019-06-25T14:04:22.2490136-03:00
    this.expiraData = new Date(dataExpiracao);

    const diaAtual = new Date().getDate();
    const mesAtual = new Date().getMonth() + 1;
    const anoAtual = new Date().getFullYear();
    const horaAtual = new Date().getHours();

    const expiraDia = this.expiraData.getDate();
    const expiraMes = this.expiraData.getMonth() + 1;
    const expiraAno = this.expiraData.getFullYear();
    const expiraHora = this.expiraData.getHours();

    if (expiraAno >= anoAtual && expiraMes >= mesAtual) {
      if (expiraDia > diaAtual) {
        return false;
      } else if (expiraDia < diaAtual) {
        return true;
      } else {
        if (expiraHora > horaAtual) {
          return false;
        } else {
          return true;
        }
      }
    } else {
      return true;
    }
  }
}
