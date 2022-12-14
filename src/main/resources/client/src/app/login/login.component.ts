import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee.model';
import { take, tap } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    /* private store: Store<AppState> */) { }

  return: string = '';
  employee!: Employee;

  ngOnInit() {

    /* this.route.queryParams
      .subscribe(params => { this.return = params['return'] ; });*/
  }

  /*login(form: NgForm) {
    this.store.dispatch(new Login(form.value));
  } */

}
