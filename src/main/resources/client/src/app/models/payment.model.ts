import { TypeFinancialMotivation } from "./typefinancialmotivation.model";

export class Payment{
   id: number;
    paymentsName: String;
paymentsAmount: number;
 typeFinancialMotivation: TypeFinancialMotivation;
 constructor(  id: number,
    paymentsName: String,
    paymentsAmount: number,
     typeFinancialMotivation: TypeFinancialMotivation){
        this.id = id;
        this.paymentsName = paymentsName;
        this.paymentsAmount = paymentsAmount;
        this.typeFinancialMotivation = typeFinancialMotivation;
 }
}