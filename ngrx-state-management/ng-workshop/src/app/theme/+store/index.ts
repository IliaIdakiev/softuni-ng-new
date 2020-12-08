import { ActionReducerMap } from '@ngrx/store';
import { IRootState } from 'src/app/+store';
import { IThemeListState, IThemeDetailState, themeListReducer, themeDetailReducer } from './reducers';


export interface IThemeState {
  readonly list: IThemeListState;
  readonly detail: IThemeDetailState;
}

export interface IThemeModuleState extends IRootState {
  theme: IThemeState;
}

export const reducers: ActionReducerMap<IThemeState> = {
  list: themeListReducer,
  detail: themeDetailReducer
};
