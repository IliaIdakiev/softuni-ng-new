import { Component, Inject, Input, OnInit } from '@angular/core';
import { MyService } from '../providers';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() obj: { name: string; };

  constructor(myService: MyService) {
    console.log(myService.value);
  }

  ngOnInit(): void {
  }

}
