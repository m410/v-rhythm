import {animate, style, transition, trigger} from "@angular/animations";

export const fadeInOutTrigger = trigger('fadeInOut', [
  transition('void => *', [
    style({opacity: 0}),
    animate(200, style({opacity: 1}))
  ]),
  transition('* => void', [
    animate(200, style({opacity: 0}))
  ])
])
