import { createGlobalStyle } from 'styled-components';

import W02ttf from './W02.ttf';
import W02woff from './W02.woff';
import subfontwoff from './subfont.woff';
import subfontttf from './subfont.ttf';

export default createGlobalStyle`
    @font-face{
        font-family:TsangerYuMo;
        src: url(${W02woff}) format('woff'),
        url(${W02ttf}) format('ttf');
    }
    @font-face {
        font-family: SubFont;
        src:url(${subfontttf}) format('ttf'),
        url(${subfontwoff}) format('woff');
    }
    body,div,ul,ol,dl,dt,dd,li,dl,h1,h2,h3,h4{
      font-family:TsangerYuMo;
    } 
  `;