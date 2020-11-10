




import {
  Component,
  OnDestroy,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameInputComponent implements OnDestroy, OnInit, OnChanges {

  @Input() inputValue = 'Default Value';
  // @Input() article: IArticle;
  @Output() btnClick = new EventEmitter();

  constructor() {
    console.log('ctor');
  }

  ngOnInit(): void {

  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    console.log(simpleChanges);
  }

  // inputKeyupHandler(target: HTMLInputElement): void {
  //   this.inputValue = target.value;
  // }

  btnClickHandler(value: KeyboardEvent, inputEl: HTMLInputElement): void {
    console.log('btn was clicked!', value);
    console.log('input value is', inputEl.value);

    this.btnClick.emit({ inputEl });
  }

  ngOnDestroy(): void {
    console.log('name input component was destroyed');
  }

}
