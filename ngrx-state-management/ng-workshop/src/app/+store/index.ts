// StoreModule.forRoot({ count: counterReducer }

import { ActionReducerMap } from '@ngrx/store';
import { IAuthState } from './reducers';
import { authReducer } from './reducers';

export interface IRootState {
  readonly auth: IAuthState;
}

export const reducers: ActionReducerMap<IRootState> = {
  auth: authReducer
};
