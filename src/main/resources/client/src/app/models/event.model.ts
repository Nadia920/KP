import { TypeNonFinancialMotivation } from '../models/typenonfinancialmotivation.model';
export class Event {
id: number;
eventName: String;
descriptionOfTheEvent: String;
dateOfTheEvent: Date;
programOfTheEvent: String;
budget: String;
typeNonFinancialMotivation: TypeNonFinancialMotivation;
constructor(id: number, eventName: String, descriptionOfTheEvent: String, dateOfTheEvent: Date, programOfTheEvent: String, budget: String,  typeNonFinancialMotivation: TypeNonFinancialMotivation){
this.id = id;
this.eventName = eventName;
this.descriptionOfTheEvent = descriptionOfTheEvent;
this.dateOfTheEvent = dateOfTheEvent;
this.programOfTheEvent = programOfTheEvent;
this.budget = budget;
this.typeNonFinancialMotivation = typeNonFinancialMotivation;
}
}
