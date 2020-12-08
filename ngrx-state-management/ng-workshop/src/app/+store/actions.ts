import { createAction, props } from '@ngrx/store';
import { IUser } from '../shared/interfaces';

const authNamespace = `[AUTH]`;

export const login = createAction(`${authNamespace} Login`, props<{ user: IUser }>());
export const register = createAction(`${authNamespace} Register`, props<{ user: IUser }>());
export const logout = createAction(`${authNamespace} Logout`);
export const authenticate = createAction(`${authNamespace} Authenticate`, props<{ user: IUser }>());
export const updateUser = createAction(`${authNamespace} Update User`, props<{ user: IUser }>());
