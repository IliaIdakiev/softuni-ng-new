import { createReducer, on } from '@ngrx/store';
import {
  userLoginSetErrorMessage,
  userLoginSetLoading,
  userRegisterSetLoading,
  userRegisterSetErrorMessage,
  userProfileSetEditMode,
  userProfileSetErrorMessage
} from './actions';

export interface ILoginState {
  errorMessage: string | null;
  isLoading: boolean;
}

export const initialLoginState: ILoginState = {
  errorMessage: null,
  isLoading: false
};

export const loginReducer = createReducer<ILoginState>(
  initialLoginState,
  on(userLoginSetErrorMessage, (state, action) => {
    return { ...state, errorMessage: action.message };
  }),
  on(userLoginSetLoading, (state, action) => {
    return { ...state, isLoading: action.isLoading };
  })
);



export interface IRegisterState {
  errorMessage: string | null;
  isLoading: boolean;
}

export const initialRegisterState: IRegisterState = {
  errorMessage: null,
  isLoading: false
};

export const registerReducer = createReducer<IRegisterState>(
  initialRegisterState,
  on(userRegisterSetErrorMessage, (state, action) => {
    return { ...state, errorMessage: action.message };
  }),
  on(userRegisterSetLoading, (state, action) => {
    return { ...state, isLoading: action.isLoading };
  })
);


export interface IProfileState {
  isEditMode: boolean;
  isLoading: boolean;
}

export const initialProfileState: IProfileState = {
  isEditMode: false,
  isLoading: false
};

export const profileReducer = createReducer<IProfileState>(
  initialProfileState,
  on(userProfileSetEditMode, (state, action) => {
    const isLoading = !action.isEdit ? false : state.isLoading;
    return { ...state, isEditMode: action.isEdit, isLoading };
  }),
  on(userLoginSetLoading, (state, action) => {
    return { ...state, isLoading: action.isLoading };
  }),
  on(userProfileSetErrorMessage, (state, action) => {
    const isLoading = false;
    return { ...state, errorMessage: action.message, isLoading };
  }),
);
