import {Employee} from './employee.model';
import {HRManager} from './hrmanager.model';
import {TypeFinancialMotivation} from './typefinancialmotivation.model';
import {TypeNonFinancialMotivation} from './typenonfinancialmotivation.model';
export class MethodOfMotivationInvolved {
id: number = 0;
before: String = "";
after: String = "";
dateOfRecieving: Date = new Date();
employee:  Set<Employee>;
hrManager:  Set<HRManager>;
typeNonFinancialMotivation: TypeNonFinancialMotivation;
typeFinancialMotivation: TypeFinancialMotivation;
constructor (id: number, before: String, after: String, dateOfRecieving: Date, employee: Set<Employee>, hrManager: Set<HRManager>, typeNonFinancialMotivation: TypeNonFinancialMotivation, typeFinancialMotivation: TypeFinancialMotivation) {
this.id = id;
this.before = before;
this.after = after;
this.dateOfRecieving = dateOfRecieving;
this.employee = employee;
this.hrManager = hrManager;
this.typeNonFinancialMotivation = typeNonFinancialMotivation;
this.typeFinancialMotivation = typeFinancialMotivation;
}
}
