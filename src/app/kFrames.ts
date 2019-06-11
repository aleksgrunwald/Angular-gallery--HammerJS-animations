import { keyframes, style } from '@angular/animations'

export const swing = [
  style({transform: 'translate3d(0, 0, 0);', offset: .2}),
  // style({transform: 'rotate3d(0, 0, 1, -10deg)', offset: .4}),
  // style({transform: 'rotate3d(0, 0, 1, 5deg)', offset: .6}),
  style({transform: 'translate3d(30vw, 0, 0)', offset: .8}),
  style({transform: 'none', offset: 1})
]
