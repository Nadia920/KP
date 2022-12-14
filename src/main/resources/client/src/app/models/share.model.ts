import { TypeFinancialMotivation } from "./typefinancialmotivation.model";

export class share{
     id: number;
    companyName: String;
    fullPercent: number;
    remainingNumberOfPercentagesOfShares: number;
     typeFinancialMotivation: TypeFinancialMotivation ;
     constructor( id: number, companyName: String,
        fullPercent: number,
        remainingNumberOfPercentagesOfShares: number,
         typeFinancialMotivation: TypeFinancialMotivation){
            this.id = id;
            this.companyName = companyName;
            this.fullPercent = fullPercent;
            this.remainingNumberOfPercentagesOfShares = remainingNumberOfPercentagesOfShares;
            this.typeFinancialMotivation =  typeFinancialMotivation;
     
     }
}