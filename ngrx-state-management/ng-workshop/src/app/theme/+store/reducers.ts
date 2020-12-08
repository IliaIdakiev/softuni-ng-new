import { createReducer, on } from '@ngrx/store';
import { IPost, ITheme } from 'src/app/shared/interfaces';
import {
  themeDetailClear,
  themeDetailSetIsLoading,
  themeDetailSetTheme,
  themeListClear,
  themeListLoadPostList,
  themeListLoadThemeList,
  themeListSetIsLoading,
  themeListSetPostList,
  themeListSetThemeList
} from './actions';

export interface IThemeDetailState {
  theme: ITheme<IPost> | null;
  isLoading: boolean;
}

export const initialThemeDetailState: IThemeDetailState = {
  theme: null,
  isLoading: false
};

export const themeDetailReducer = createReducer<IThemeDetailState>(
  initialThemeDetailState,
  on(themeDetailSetTheme, (state, action) => {
    return { ...state, theme: action.theme };
  }),
  on(themeDetailSetIsLoading, (state, action) => {
    return { ...state, isLoading: action.isLoading };
  }),
  on(themeDetailClear, () => initialThemeDetailState)
);



export interface IThemeListState {
  themeList: ITheme[] | null;
  postList: IPost[] | null;
  isLoading: boolean;
}

export const initialThemeListState: IThemeListState = {
  themeList: null,
  postList: null,
  isLoading: false
};

export const themeListReducer = createReducer<IThemeListState>(
  initialThemeListState,
  on(themeListSetPostList, (state, action) => {
    const isLoading = state.themeList !== null ? false : state.isLoading;
    return { ...state, postList: action.postList, isLoading };
  }),
  on(themeListSetThemeList, (state, action) => {
    const isLoading = state.postList !== null ? false : state.isLoading;
    return { ...state, themeList: action.themeList, isLoading };
  }),
  on(themeListSetIsLoading, (state, action) => {
    return { ...state, isLoading: action.isLoading };
  }),
  on(themeListLoadThemeList, (state) => {
    return { ...state, isLoading: true };
  }),
  on(themeListLoadPostList, (state) => {
    return { ...state, isLoading: true };
  }),
  on(themeListClear, () => initialThemeListState)
);
