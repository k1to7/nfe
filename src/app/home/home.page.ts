import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController) {}
  async criarNotaFiscal() {


    const alert = await this.alertController.create({
      header: 'Criar Nota Fiscal',
      message: 'Aqui você implementaria a lógica para criar a nota fiscal.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async imprimirNotaFiscal() {
    const alert = await this.alertController.create({
      header: 'Imprimir Nota Fiscal',
      message: 'Aqui você implementaria a lógica para imprimir a nota fiscal.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}




