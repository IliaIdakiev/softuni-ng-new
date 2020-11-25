import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('f', { static: false }) from: NgForm;

  defaultPassword = 123;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.from.valueChanges.subscribe(console.log);
  }

  loginHandler(formData) {
    console.log(this.from);
    console.log(formData);
  }
}
