import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { LoginModel } from './login.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private httpClient: HttpClient, private router: Router) {
    }
    getLogin(loginModel: LoginModel) {
        return this.httpClient.post<any>(environment.apiLogin, loginModel);
    }

}
