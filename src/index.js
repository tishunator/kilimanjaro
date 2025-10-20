import './scss/main.scss';
import Glide from '@glidejs/glide';

new Glide('.guides-glide ', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  focusAt: 0,
  peek: { before: 0, after: 240 },
  gap: 20,
  breakpoints: {
    768: {
      perView: 1,
      peek: { before: 0, after: 0 },
      gap: 10
    }
  }
}).mount();

new Glide('.hero-glide', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  gap: 40,
  focusAt: 'center',
}).mount();