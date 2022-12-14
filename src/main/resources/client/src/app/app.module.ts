import { ApartmentsComponent } from './apartments/apartments.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddApartmentsComponent } from './apartments/addapartments/addapartments.component';
import { AddbonusComponent } from './bonus/addbonus/addbonus.component'
import { BonusComponent } from './bonus/bonus.component'
import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component'
import { AddcryptoccurencyComponent } from './cryptocurrency/addcryptoccurency/addcryptoccurency.component'
//import { AddEventComponent } from './employees/employees.component'
import { AddEventComponent } from './event/addevent/addevent.component'
//import { EventComponent } from './event/event.component'
//import { EventComponent } from './event/event.service'

import { FooterComponent } from './footer/footer.component'
// import { HeaderComponent } from './header/header.component'
// import { HomeComponent } from './home/home.component'
import { AddhrmanagersComponent } from './hrmanagers/addhrmanagers/addhrmanagers.component'
import { HrmanagersComponent } from './hrmanagers/hrmanagers.component'

import { LoginComponent } from './login/login.component'
import { MenuadminComponent } from './menuadmin/menuadmin.component'
import { MenuemployeeComponent } from './menuemployee/menuemployee.component'
//import { MethodsofmotivationinvolvedComponent } from './methodsofmotivation/methodsofmotivationinvolved/methodsofmotivationinvolved.component'
//import { AllmotivationComponent } from './methodsofmotivation/updatemotivation/allmotivation.component.spec'

import { AddpaymentsComponent } from './payments/addpayments/addpayments.component'
import { PaymentsComponent } from './payments/payments.component'
import { AddpromotionComponent } from './promotion/addpromotion/addpromotion.component'
//import { AddpromotionComponent } from './promotion/promotion.component'
//import { PunishmentComponent } from './punishment/addpunishment/addpunishment.component'
import { PunishmentComponent } from './punishment/punishment.component'
import { AddsharesComponent } from './shares/addshares/addshares.component'
import { SharesComponent } from './shares/shares.component'
import { ShowyourmotivationComponent } from './showyourmotivation/showyourmotivation.component'
// import { SignupComponent } from './signup/signup.component'
import { TypesfinancialmotivationComponent } from './typesfinancialmotivation/typesfinancialmotivation.component'
import { AddtypesnonfinancialmotivationComponent } from './typesnonfinancialmotivation/addtypesnonfinancialmotivation/addtypesnonfinancialmotivation.component'
import { TypesnonfinancialmotivationComponent } from './typesnonfinancialmotivation/typesnonfinancialmotivation.component'
//import { WorkComponent } from './workstatistics/addworkstatistics/addworkstatistics.component'
import { WorkStatisticsComponent } from './workstatistics/workstatistics.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MethodsOfMotivationInvolvedComponent } from './methodsofmotivation/methodsofmotivationinvolved/methodsofmotivationinvolved.component';
import { AddMethodsOfMotivationInvolvedComponent} from './methodsofmotivation/addmethodsofmotivation/addmethodsofmotivation.component';
import { FormsModule } from '@angular/forms';
import { CareerLadderComponent } from './careerladder/careerladder.component';
import { EventComponent } from './event/event.component';


@NgModule({
  declarations: [
    AppComponent,
    MethodsOfMotivationInvolvedComponent,
    AddMethodsOfMotivationInvolvedComponent,
    ApartmentsComponent,
    AddApartmentsComponent,
    AddbonusComponent,
    BonusComponent,
    CryptocurrencyComponent,
    AddcryptoccurencyComponent,
    AddEventComponent,
    EventComponent,
    FooterComponent,
    CareerLadderComponent,
    // HeaderComponent,
    // HomeComponent,
    AddhrmanagersComponent,
    HrmanagersComponent,
    LoginComponent,
    MenuadminComponent,
    MenuemployeeComponent,
    AddpaymentsComponent,
    PaymentsComponent,
    AddpromotionComponent,
    PunishmentComponent,
    AddsharesComponent,
    SharesComponent,
    ShowyourmotivationComponent,
    // SignupComponent,
    TypesfinancialmotivationComponent,
    AddtypesnonfinancialmotivationComponent,
    TypesnonfinancialmotivationComponent,
    WorkStatisticsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  // MethodOfMotivationInvolvedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }