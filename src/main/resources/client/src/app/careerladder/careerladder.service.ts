import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CareerLadder } from '../models/careerladder.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CareerLadderService {

  constructor(private http:HttpClient) {}

  private careerladderUrl = 'http://localhost:8080/event/api';

  public get() {
    return this.http.get(this.careerladderUrl);
  }

  public delete(careerladder: CareerLadder) {
    return this.http.delete(this.careerladderUrl + "/"+ careerladder.id);
  }

  public create(careerladder: CareerLadder) {
    return this.http.post(this.careerladderUrl, careerladder);
  }

}
