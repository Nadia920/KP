import { MethodOfMotivationInvolved } from "./methodofmotivationinvolved.model";
import { Apartment } from "./apartment.model";
import { Cryptocurrency } from "./cryptocurrency.model";
import { Bonus } from "./bonus.model";
import { Payment } from "./payment.model";
export class TypeFinancialMotivation {
    id: number;
    nameFinMotivation: String;
    descriptionFinMotivation: String;
    whoCanGetFinMotivation: String;
    methodOfMotivationInvolved: Set<MethodOfMotivationInvolved>;
    apartments: Set<Apartment>;
    cryptocurrency: Set<Cryptocurrency>;
    bonus: Set<Bonus>;
    payments: Set<Payment>;
    constructor(  id: number,
        nameFinMotivation: String,
        descriptionFinMotivation: String,
        whoCanGetFinMotivation: String,
        methodOfMotivationInvolved: Set<MethodOfMotivationInvolved>,
        apartments: Set<Apartment>,
        cryptocurrency: Set<Cryptocurrency>,
        bonus: Set<Bonus>,
        payments: Set<Payment>){
            this.id = id;
            this.nameFinMotivation = nameFinMotivation;
            this.descriptionFinMotivation = descriptionFinMotivation;
            this.whoCanGetFinMotivation = whoCanGetFinMotivation;
            this.methodOfMotivationInvolved = methodOfMotivationInvolved;
            this.apartments = apartments;
            this.cryptocurrency = cryptocurrency;
            this.bonus = bonus;
            this.payments = payments;

    }
}
