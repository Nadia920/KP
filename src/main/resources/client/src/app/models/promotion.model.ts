export class Promotion{
 id: number;
 titleOfThePosition: String;
 numberOfPointsRequired: number;
 constructor(id: number,
    titleOfThePosition: String,
    numberOfPointsRequired: number){
        this.id = id;
        this.titleOfThePosition = titleOfThePosition;
        this.numberOfPointsRequired = numberOfPointsRequired;
 }
}