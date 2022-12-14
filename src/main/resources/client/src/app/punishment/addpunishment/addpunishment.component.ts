import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Punishment } from '../../models/punishment.model';
import { PunishmentService } from '../punishment.service';

@Component({
  selector: 'app-addpunishment',
  templateUrl: './addpunishment.component.html',
  styleUrls: ['./addpunishment.component.scss']
})
export class AddPunishmentComponent {

   punishment!: Punishment;

   constructor(private router: Router, private punishmentService: PunishmentService) {

   }

   create(): void {
     this.punishmentService.create(this.punishment)
         .subscribe( data => {
           alert("Punishment created successfully.");
         });

   };
}


