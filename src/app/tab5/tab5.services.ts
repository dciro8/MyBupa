import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { PolicyMenber } from './tab5.Model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PoliceService {

    constructor(private httpClient: HttpClient, private router: Router ) {
    }
    getPolice(policyMenber: PolicyMenber) {
        return this.httpClient.post<any>(environment.apiDetail,policyMenber);
    }

}