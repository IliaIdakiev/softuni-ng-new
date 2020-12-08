import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/auth.service';
import { IUser } from 'src/app/shared/interfaces';
import { IUserModuleState } from '../+store';
import { userProfileSetEditMode, userProfileSetErrorMessage, userProfileSetLoading } from '../+store/actions';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  inEditMode$ = this.store.select(state => state.user.profile.isEditMode);
  isLoading$ = this.store.select(state => state.user.profile.isLoading);
  currentUser$ = this.authService.currentUser$;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private store: Store<IUserModuleState>
  ) { }

  ngOnInit(): void {
    this.userService.getCurrentUserProfile().subscribe();
  }

  toggleEditMode(currentValue): void {
    this.store.dispatch(userProfileSetEditMode({ isEdit: !currentValue }));
  }

  submitHandler(data: any): void {
    this.store.dispatch(userProfileSetLoading({ isLoading: true }));
    this.userService.updateProfile(data).subscribe({
      next: () => {
        this.store.dispatch(userProfileSetEditMode({ isEdit: false }));
      },
      error: (err) => {
        this.store.dispatch(userProfileSetErrorMessage({ message: err.error.message }));
        console.error(err);
      }
    });
  }

}
