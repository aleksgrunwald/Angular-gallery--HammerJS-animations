import {
  trigger,
  transition,
  style,
  query,
  animate,
} from '@angular/animations';


export const enterImageDetailsPage =
  trigger('routeAnimations', [
    transition('GalleryPage => ImageDetailsPage', [
      // najpier zrob to
      // :leave  ==>  ten ktory znika przy interakci z routem
      query(':enter', [
          animate('10ms',
            style({
              opacity: 1
            }),
          )]
        , { optional: true }),
      query(':leave', [
          animate('300ms ease',
            style({
              top: '100%',

            }),
          )]
        , { optional: true })
    ]),

    transition('* => GalleryPage', [
      query(':enter, :leave', [
        style({
          opacity: 0,
        }),
      ]),
      query(':enter', [
        animate('800ms ease', style({
          opacity: 1,
        }
          )),
      ])
    ]),

  ]);
