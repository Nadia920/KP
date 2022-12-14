import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';

// тоже не понимают назначение этого
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(public httpService: HttpService,
    private matSnackBar:MatSnackBar) { }

}
