import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MentorServiceService } from './mentor-service.service';
import { Mentor } from '../mentor-profile/Mentor';
@Injectable({
  providedIn: 'root'
})
export class RegisterCommonService {
  URL = 'https://3.108.244.156:8086/user-service/api/v1';
  constructor(private _http: HttpClient,public mentorService:MentorServiceService) { }
  mentor:Mentor = new Mentor();

  registerUser(data:any) {
   
    return this._http.post(`${this.URL}/register`, data);
  }


}
