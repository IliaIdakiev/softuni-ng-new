import { AfterViewInit, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IThemeModuleState } from '../+store';
import { themeListLoadThemeList, themeListSetIsLoading, themeListSetThemeList } from '../+store/actions';
import { ITheme } from '../../shared/interfaces';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements AfterViewInit {

  themeList$ = this.store.select(state => state.theme.list.themeList);

  constructor(private store: Store<IThemeModuleState>) {
    this.store.dispatch(themeListLoadThemeList());
  }

  ngAfterViewInit(): void {
    console.log('View was initialized');
  }

}
