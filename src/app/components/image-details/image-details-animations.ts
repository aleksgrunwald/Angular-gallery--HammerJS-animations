import {animate, state, style, transition, trigger} from "@angular/animations";


export const imageDetailsAnimations = [
  trigger('imageState', [
    state('outRight', style({
      transform: 'scale(1.15) translateX(100%)',
      opacity: '0'
    })),
    state('outLeft', style({
      transform: 'scale(1.15) translateX(-100%)',
      opacity: '0'
    })),
    state('center', style({
      transform: 'scale(1.0) translateX(0)',
      opacity: '1'
    })),
    transition('* => *', animate('210ms ease-in')),
  ]),

  trigger('animWrapper', [
    state('wrapperGrow', style({
      opacity: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      // transform: 'scale(0.9) translateX(0%)',
    })),
     transition('* => *', animate('90ms ease-in-out')),
  ])
]
