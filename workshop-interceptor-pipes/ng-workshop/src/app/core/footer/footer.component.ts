import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isReady$ = this.authService.isReady$;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
