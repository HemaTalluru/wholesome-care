import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentDetails } from '../payment/paymentDetails';
import { PaymentResponse } from '../payment/PaymentResponse';
@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  constructor(public httpClient: HttpClient) { }
  makeCharge(paymentDetail: PaymentDetails): Observable<PaymentResponse> {
    return this.httpClient.post<PaymentResponse>('https://3.108.244.156:8086/plan-payment-service/api/v1/payment/charge', paymentDetail);
  }
}
