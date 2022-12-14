import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Punishment } from '../models/punishment.model';
import { PunishmentService } from './punishment.service';

@Component({
  selector: 'app-punishment',
  templateUrl: './punishment.component.html',
  styleUrls: ['./punishment.component.scss']
})
export class PunishmentComponent implements OnInit{
  punishments: Punishment[] = [];

  constructor(private punishmentService: PunishmentService) {

    }

  ngOnInit() {

    };

    delete(punishment: Punishment): void {
      this.punishmentService.delete(punishment)
        .subscribe( data => {
          this.punishments = this.punishments.filter(p => p !== punishment);
        })
    };

}
