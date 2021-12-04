import {Component, ViewEncapsulation} from '@angular/core';
import {fadeInOutTrigger} from "./fad-in-out.trigger";

@Component({
  selector: 'rhythm-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.scss'],
  animations: [fadeInOutTrigger],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MaskComponent {
  maskOn = true;

  changeState(state: boolean) {
    this.maskOn = state;
  }
}
