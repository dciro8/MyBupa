import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginService } from './login.services';
import { LoginModel, LoginResult } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  title: string = 'MyBupa';
  loginModel: LoginModel = {};

  loginResult: LoginResult = {};



  constructor(public alertController: AlertController, private loginUser: LoginService, private router: Router) { }


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

  ngOnInit() { }

  login() {
    // this.presentAlert(`${this.loginModel.username} ${loginModel.password}`);
    // localStorage.setItem('User', this.loginModel.username);
    // localStorage.setItem('Password', this.loginModel.password);

    this.loginUser.getLogin(this.loginModel).subscribe(
      (res: LoginResult) => {
        console.log(res);

      console.log(this.loginResult.token);
       this.loginResult=res;
        this.router.navigate(['/tabs']);
      }
      , error => {
        this.presentAlert(JSON.stringify(error));
      });


    // this.router.navigate(['/tabs']);
  }


}
