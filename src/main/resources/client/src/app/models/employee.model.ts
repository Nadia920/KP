import {RoleEntity} from '../models/roleentity.model';
import {MethodOfMotivationInvolved} from '../models/methodofmotivationinvolved.model';
import {WorkStatistics} from '../models/workstatistics.model';
import {Punishment} from '../models/punishment.model';
export class Employee {
    id: number;
    surname: String;
    firstName: String;
    patronymic: String;
    dateOfBirth: Date;
    position: String;
    responsibilities: String;
    numberOfPoints: number;
    login: String;
    password: String;
    email: String;
    roleEntity: RoleEntity;
    methodOfMotivationInvolved: MethodOfMotivationInvolved;
    workStatistics: WorkStatistics;
    punishments: Punishment;
    constructor (id: number,surname: String,firstName: String, patronymic: String, dateOfBirth: Date, position: String,  responsibilities: String,  numberOfPoints: number,  login: String, password: String, email: String, roleEntity: RoleEntity, methodOfMotivationInvolved: MethodOfMotivationInvolved, workStatistics: WorkStatistics, punishments: Punishment) {
    this.id = id;
    this.surname = surname;
    this.firstName = firstName;
    this.patronymic = patronymic;
    this.dateOfBirth = dateOfBirth;
    this.position = position;
    this.responsibilities = responsibilities;
    this.numberOfPoints = numberOfPoints;
    this.login = login;
    this.password = password;
    this.email = email;
    this.roleEntity = roleEntity;
    this.methodOfMotivationInvolved = methodOfMotivationInvolved;
    this.workStatistics = workStatistics;
    this.punishments = punishments;
    }
}
