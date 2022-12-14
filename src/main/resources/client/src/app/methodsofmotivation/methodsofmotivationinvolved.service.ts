import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MethodOfMotivationInvolved } from '../models/methodofmotivationinvolved.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MethodOfMotivationInvolvedService {

  constructor(private http:HttpClient) {}

  private methodOfMotivationUrl = 'http://localhost:8080/motivation/api';

  public get() {
    return this.http.get(this.methodOfMotivationUrl);
  }

  public delete(methodOfMotivation: MethodOfMotivationInvolved) {
    return this.http.delete(this.methodOfMotivationUrl + "/"+ methodOfMotivation.id);
  }

  public create(methodOfMotivation: MethodOfMotivationInvolved) {
    return this.http.post(this.methodOfMotivationUrl, methodOfMotivation);
  }

}
