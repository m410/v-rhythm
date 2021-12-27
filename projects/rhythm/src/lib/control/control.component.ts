import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'rhythm-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ControlComponent implements OnInit {
  @Output()
  display = new EventEmitter<boolean>();

  on = false;

  form = new FormGroup({
    on: new FormControl([true])
  });

  ngOnInit(): void {
    this.onChanges();
  }

  onChanges(): void {
    this.form.get('on')?.valueChanges.subscribe(val => {
      this.display.emit(val);
    });
  }
}
