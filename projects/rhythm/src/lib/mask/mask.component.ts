import {Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {fadeInOutTrigger} from "./fad-in-out.trigger";

@Component({
  selector: 'rhythm-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.scss'],
  animations: [ fadeInOutTrigger ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MaskComponent {
  maskOn = true;
  y = ['a','b','c','d','e','r','g','h','i','j','k','l'];
  @ViewChild('mask')
  mask!: ElementRef;

  changeState(state: boolean): void {
    this.maskOn = state;
  }

  base64EncodeUnicode(str: string): string {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode(parseInt('0x' + p1));
    }));
  }

  base64DecodeUnicode(str: string): string {
    return decodeURIComponent(atob(str).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }
}
