import { Component } from '@angular/core';
import { Apartment } from 'src/app/models/apartment.model';

@Component({
  selector: 'app-addapartments',
  templateUrl: './addapartments.component.html',
  styleUrls: ['./addapartments.component.scss']
})
export class AddApartmentsComponent {

  apartment: Apartment = {
    id: 0,
    address: '',
  totalCost: 0,
  companyPaymentPercentage: 0,
  termsOfProvision: '',
  typeFinancialMotivation: null
  };

}
