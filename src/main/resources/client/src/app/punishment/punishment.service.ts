import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Punishment } from '../models/punishment.model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PunishmentService {

  constructor(private http:HttpClient) {}

  private punishmentUrl = 'http://localhost:8080/punishment/api';

  public get(): Observable<Punishment[]> {
    return this.http.get<Punishment[]>(this.punishmentUrl);
  }

  public delete(punishment: Punishment): Observable<any> {
    return this.http.delete(this.punishmentUrl + "/"+ punishment.id);
  }

  public create(punishment: Punishment): Observable<any> {
    return this.http.post(this.punishmentUrl, punishment);
  }

}
