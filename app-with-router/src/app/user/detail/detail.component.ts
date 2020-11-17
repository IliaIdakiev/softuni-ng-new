import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { tap, switchMap } from 'rxjs/operators';

[1, 2, 3].map(x => x + 1);

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  user: any;
  currentUserId: number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      tap((params) => {
        this.user = null;
        this.currentUserId = +params.id;
      }),
      switchMap((params) => this.userService.loadUser(params.id))
    ).subscribe(user => {
      this.user = user;
    });
  }

}
