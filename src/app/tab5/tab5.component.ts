import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PolicyMenber } from './tab5.Model';
import { PoliceService } from './tab5.services';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.component.html',
  styleUrls: ['./tab5.component.scss'],
})
export class Tab5Component implements OnInit {


  policy: PolicyMenber = {};

  constructor(private alertController: AlertController,private policeService:PoliceService, private router: Router) { }

  ngOnInit() {}

  async presentAlert(Message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: Message,
      buttons: ['OK']
    });

    await alert.present();
  }


  policeDetail() {
    this.policeService.getPolice(this.policy).subscribe(
      (res: PolicyMenber) => {
        console.log(res);

        this.presentAlert(JSON.stringify(this.policy));

        // this.router.navigate(['/tabs']);
      }
      , error => {
        this.presentAlert(JSON.stringify(error));
      });


    // this.router.navigate(['/tabs']);
  }

}
