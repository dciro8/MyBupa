import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PolicyMenber } from '../tab5/tab5.Model';
import { PoliceService } from '../tab5/tab5.services';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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

        this.presentAlert(JSON.stringify(res));
     console.log('sisisissisis');
        // this.router.navigate(['/tabs']);
      }
      , error => {
        this.presentAlert(JSON.stringify(error));
      });


    // this.router.navigate(['/tabs']);
  }

}
