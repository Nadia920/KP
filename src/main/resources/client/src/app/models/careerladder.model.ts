import { Employee } from "./employee.model";

export class CareerLadder{
    id: number;
    titleOfThePosition: String;
    numberOfPointsRequired: number;
    employee: Employee;
    constructor(  id: number, titleOfThePosition: String,
       numberOfPointsRequired: number, employee: Employee){
         this.id = id;
           this.titleOfThePosition = titleOfThePosition;
           this.numberOfPointsRequired = numberOfPointsRequired;
           this.employee=employee;
    }
   }