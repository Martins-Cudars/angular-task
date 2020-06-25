import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()

export class PricingService {
  constructor(private http: Http) {

  }

  sendForm( payload: { email: string, price: number }) {
    // no api, no honey :(
    // just log values
    console.log(payload)
    // return this.http.post('unknown/api/endpoint', payload)
    //   .toPromise()
  }
}