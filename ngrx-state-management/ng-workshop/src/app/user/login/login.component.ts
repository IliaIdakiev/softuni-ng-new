import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/auth.service';
import { IUserModuleState } from '../+store';
import { userLoginSetErrorMessage, userLoginSetLoading } from '../+store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../form-styles.css', './login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading$ = this.store.select(state => state.user.login.isLoading);
  errorMessage$ = this.store.select(state => state.user.login.errorMessage);

  constructor(
    private userService: AuthService,
    private router: Router,
    private store: Store<IUserModuleState>
  ) { }

  ngOnInit(): void {
  }

  changeHandler(data: any): void {
    console.log(data);
  }

  submitFormHandler(formValue: { email: string, password: string }): void {
    this.store.dispatch(userLoginSetLoading({ isLoading: true }));
    this.store.dispatch(userLoginSetErrorMessage({ message: '' }));

    this.userService.login(formValue).subscribe(
      {
        next: (data) => {
          this.store.dispatch(userLoginSetLoading({ isLoading: false }));
          // this.isLoading = false;
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.store.dispatch(userLoginSetLoading({ isLoading: false }));
          this.store.dispatch(userLoginSetErrorMessage({ message: err.error.message }));
        }
      }
    );
  }

}
