import { Component, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-taskcard',
  templateUrl: './taskcard.component.html',
  styleUrls: ['./taskcard.component.scss'],
})
export class TaskcardComponent {
  @Input() tasks: any;

  constructor(private alertController: AlertController) {}
  onCheckboxChange(event: any) {
    const isChecked = event.detail.checked;
    console.log('Checkbox state changed. Is checked:', isChecked);
    // Aquí puedes realizar cualquier acción que desees según el estado del checkbox
    this.presentAlert();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'acceptable',
      subHeader: '',
      message: 'oki doki',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Okay clicked');
          },
        },
      ],
    });

    await alert.present();
  }
}
