import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost, ITheme } from 'src/app/shared/interfaces';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  theme: ITheme<IPost> = null;

  constructor(
    themeService: ThemeService,
    activatedRoute: ActivatedRoute
  ) {
    const id = activatedRoute.snapshot.params.id;
    themeService.loadTheme(id).subscribe(theme => {
      this.theme = theme;
    });
  }

  ngOnInit(): void {
  }

}
