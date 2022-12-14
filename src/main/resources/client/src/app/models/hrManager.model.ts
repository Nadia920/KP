import { MethodOfMotivationInvolved } from "./methodofmotivationinvolved.model";

export class HRManager {
id: number;
HRSurname: String;
HRFirstname: String;
HRPatronymic: String;
HRDateOfBirth: Date;
HRPosition: String;
HRResponsibilities: String;
methodOfMotivationInvolved: Set<MethodOfMotivationInvolved>
constructor(id: number,
            HRSurname: String,
            HRFirstname: String,
            HRPatronymic: String,
            HRDateOfBirth: Date,
            HRPosition: String,
            HRResponsibilities: String,
            methodOfMotivationInvolved: Set<MethodOfMotivationInvolved>){
this.id = id;
this.HRSurname = HRSurname;
this.HRFirstname = HRFirstname;
this.HRPatronymic = HRPatronymic;
this.HRDateOfBirth = HRDateOfBirth;
this.HRPosition = HRPosition;
this.HRResponsibilities = HRResponsibilities;
this.methodOfMotivationInvolved = methodOfMotivationInvolved;
}
}
