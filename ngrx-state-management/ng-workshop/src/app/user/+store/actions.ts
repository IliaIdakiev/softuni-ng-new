import { createAction, props } from '@ngrx/store';

const userLoginNamespace = `[USER LOGIN]`;
export const userLoginSetLoading = createAction(`${userLoginNamespace} SET LOADING`, props<{ isLoading: boolean }>());
export const userLoginSetErrorMessage = createAction(`${userLoginNamespace} SET ERROR MESSAGE`, props<{ message: string }>());

const userRegisterNamespace = `[USER REGISTER]`;
export const userRegisterSetLoading = createAction(`${userRegisterNamespace} SET LOADING`, props<{ isLoading: boolean }>());
export const userRegisterSetErrorMessage = createAction(`${userRegisterNamespace} SET ERROR MESSAGE`, props<{ message: string }>());


const userProfileNamespace = `[USER PROFILE]`;
export const userProfileSetLoading = createAction(`${userProfileNamespace} SET LOADING`, props<{ isLoading: boolean }>());
export const userProfileSetEditMode = createAction(`${userProfileNamespace} SET EDIT MODE`, props<{ isEdit: boolean }>());
export const userProfileSetErrorMessage = createAction(`${userProfileNamespace} SET ERROR MESSAGE`, props<{ message: string }>());
