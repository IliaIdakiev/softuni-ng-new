import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/auth.service';
import { emailValidator, rePasswordValidatorFactory } from 'src/app/shared/validators';
import { IUserModuleState } from '../+store';
import { userLoginSetErrorMessage, userRegisterSetLoading } from '../+store/actions';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../form-styles.css', './register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  isLoading$ = this.store.select(state => state.user.register.isLoading);
  errorMessage$ = this.store.select(state => state.user.register.errorMessage);

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store<IUserModuleState>
  ) {
    const passwordControl = this.fb.control('', [Validators.required, Validators.minLength(4)]);
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, emailValidator]],
      tel: [''],
      password: passwordControl,
      rePassword: ['', [Validators.required, Validators.minLength(5), rePasswordValidatorFactory(passwordControl)]]
    });
  }

  ngOnInit(): void {
  }

  submitHandler(): void {
    const data = this.form.value;
    this.store.dispatch(userRegisterSetLoading({ isLoading: true }));
    this.store.dispatch(userLoginSetErrorMessage({ message: '' }));

    this.authService.register(data).subscribe({
      next: () => {
        this.store.dispatch(userRegisterSetLoading({ isLoading: false }));
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.store.dispatch(userLoginSetErrorMessage({ message: err.error.message }));
        this.store.dispatch(userRegisterSetLoading({ isLoading: false }));
      }
    });
  }

}
