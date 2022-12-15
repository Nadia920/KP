import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MethodsOfMotivationInvolvedComponent } from './methodsofmotivation/methodsofmotivationinvolved/methodsofmotivationinvolved.component';

const routes: Routes = [
  { path: '/methodsOfMotivationInvolvedComponent', component: MethodsOfMotivationInvolvedComponent },
  { path: '/showYourMotivation', component: MethodsOfMotivationInvolvedComponent },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
