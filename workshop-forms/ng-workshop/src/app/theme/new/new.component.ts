import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private themeService: ThemeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitHandler(data: any): void {
    this.themeService.saveTheme(data)
      .subscribe({
        next: () => {
          this.router.navigate(['/theme']);
        },
        error: (err) => {

        }
      });
  }

}
