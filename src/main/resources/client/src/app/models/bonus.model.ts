import { TypeFinancialMotivation } from "./typefinancialmotivation.model";

export class Bonus {
    id: number;
    bonusName: String;
    bonusDescription: String;
    termsOfProvision: String;
    typeFinancialMotivation: TypeFinancialMotivation;
    constructor(id: number,
        bonusName: String,
        bonusDescription: String,
        termsOfProvision: String,
        typeFinancialMotivation: TypeFinancialMotivation) {
        this.id = id;
        this.bonusName = bonusName;
        this.bonusDescription = bonusDescription;
        this.termsOfProvision = termsOfProvision;
        this.typeFinancialMotivation = typeFinancialMotivation;
    }
}