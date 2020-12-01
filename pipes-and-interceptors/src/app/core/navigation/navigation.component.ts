import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isAdmin = true;

  userList$ = this.userService.userList$;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

}
