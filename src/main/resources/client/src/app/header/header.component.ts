// import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { Router } from '@angular/router';

// // если честно, понятия не имею как это настроить
// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent implements OnInit {

//   getState: Observable<any>;
//   // isAuthenticated: false;
//   user = null;
//   errorMessage = null;

//   constructor(private store: Store<AppState>,
//     private httpService: HttpService,
//     private router: Router,
//     private snackBar: MatSnackBar) {
//     this.getState = this.store.select(authState);
//   }

//   public logged: boolean = false;

//   ngOnInit() {

//     if (sessionStorage.getItem('token') !== null) {
//       this.store.dispatch(new LoginSuccess({
//         "auth_token": sessionStorage.getItem('token'),
//         "user": JSON.parse(sessionStorage.getItem('user'))
//       })
//       );
//       this.router.navigateByUrl('/');
//   }

//     this.getState.subscribe((state) => {
//       console.log(state);
//       this.logged = state.isAuthenticated;
//       this.user = state.user;
//       this.errorMessage = state.errorMessage;
//     });
//   }

//   logout() {
//     console.log("Logout from application");
//     this.store.dispatch(new Logout);
// }
// }

// а смысл-то?