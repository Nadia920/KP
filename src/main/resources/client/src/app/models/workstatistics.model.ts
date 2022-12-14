import {Employee} from './employee.model';
export class WorkStatistics {
id: number;
numberOfHoursWorked: number;
overtime: number;
numberOfClosedProjects: number;
employee: Employee
constructor (id: number, numberOfHoursWorked:number, overtime:number, numberOfClosedProjects:number, employee:Employee){
this.id = id
this.numberOfHoursWorked = numberOfHoursWorked;
this.overtime = overtime;
this.numberOfClosedProjects = numberOfClosedProjects;
this.employee = employee;
}
}
