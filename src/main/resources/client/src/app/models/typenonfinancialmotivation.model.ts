import { Employee } from "./employee.model";
import { MethodOfMotivationInvolved } from "./methodofmotivationinvolved.model";

export class TypeNonFinancialMotivation {
    id: number;
    nameNonFinMotivation: String;
    descriptionNonFinMotivation: String;
    whoCanGetNonFinMotivation: Employee;
    methodOfMotivationInvolved: Set<MethodOfMotivationInvolved>;
    constructor(id: number,
        nameNonFinMotivation: String,
        descriptionNonFinMotivation: String,
        whoCanGetNonFinMotivation: Employee,
        methodOfMotivationInvolved: Set<MethodOfMotivationInvolved>){
      this.id = id;
      this.nameNonFinMotivation = nameNonFinMotivation;
      this.descriptionNonFinMotivation = descriptionNonFinMotivation;
      this.whoCanGetNonFinMotivation = whoCanGetNonFinMotivation;
      this.methodOfMotivationInvolved = methodOfMotivationInvolved;
    }


}
