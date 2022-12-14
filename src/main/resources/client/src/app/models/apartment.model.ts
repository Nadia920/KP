import { TypeFinancialMotivation } from "./typefinancialmotivation.model";

export class Apartment{
 id: number;
    address: String;
  totalCost: number;
  companyPaymentPercentage: number;
  termsOfProvision: String;
  typeFinancialMotivation: TypeFinancialMotivation;
  constructor( id: number, address: String,
    totalCost: number,
    companyPaymentPercentage: number,
    termsOfProvision: String,
    typeFinancialMotivation: TypeFinancialMotivation){
        this.id = id;
        this.address =  address;
        this.totalCost = totalCost;
        this.companyPaymentPercentage = companyPaymentPercentage;
        this.termsOfProvision = termsOfProvision;
        this.typeFinancialMotivation = typeFinancialMotivation;
  }
}