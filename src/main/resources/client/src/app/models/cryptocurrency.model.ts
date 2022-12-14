import { TypeFinancialMotivation } from "./typefinancialmotivation.model";

export class Cryptocurrency {
 id:number;
    coinName: String;
 amountCoinsAreIssued: number;
termsOfProvision: String;
typeFinancialMotivation: TypeFinancialMotivation;
constructor( id:number,
    coinName: String,
    amountCoinsAreIssued: number,
   termsOfProvision: String,
   typeFinancialMotivation: TypeFinancialMotivation){
    this.id = id;
    this.coinName = coinName;
    this.amountCoinsAreIssued =  amountCoinsAreIssued;
    this.termsOfProvision = termsOfProvision;
    this.typeFinancialMotivation = typeFinancialMotivation;
}
}