import {Employee} from './employee.model';
export class Punishment {
id: number;
misconduct: String;
judgment: String;
employee: Employee
constructor(id: number, misconduct: String, judgment: String, employee: Employee){
this.id = id;
this.misconduct = misconduct;
this.judgment = judgment;
this.employee = employee;
}
}
