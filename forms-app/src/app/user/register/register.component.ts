import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['test@email.bg', [Validators.required, Validators.email], []],
      password: ['test-password', [Validators.required, Validators.minLength(4)], []],
      address: this.fb.group({
        street: ['TEST', [Validators.required]],
        postCode: ['1000', [Validators.required]]
      })
    });
  }

  ngOnInit() {
  }


  registerHandler() {

  }

  reset() {
    this.form.reset();
  }

}
