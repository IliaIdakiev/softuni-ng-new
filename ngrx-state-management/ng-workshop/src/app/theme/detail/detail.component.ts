import { ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IPost, ITheme } from 'src/app/shared/interfaces';
import { IThemeModuleState } from '../+store';
import { themeDetailClear, themeDetailSetTheme } from '../+store/actions';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  theme$ = this.store.select(state => state.theme.detail.theme);
  isLoading$ = this.store.select(state => state.theme.detail.isLoading);

  constructor(
    private store: Store<IThemeModuleState>,
    themeService: ThemeService,
    activatedRoute: ActivatedRoute
  ) {
    const id = activatedRoute.snapshot.params.id;
    themeService.loadTheme(id).subscribe(theme => {
      this.store.dispatch(themeDetailSetTheme({ theme }));
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.store.dispatch(themeDetailClear());
  }
}
