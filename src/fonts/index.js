import { createGlobalStyle } from 'styled-components';

import W02ttf from './W02.ttf';
import W02woff from './W02.woff';

export default createGlobalStyle`
    @font-face{
        font-family:TsangerYuMo;
        src: url(${W02woff}) format('woff'),
        url(${W02ttf}) format('ttf');
    }
    body,div,ul,ol,dl,dt,dd,li,dl,h1,h2,h3,h4{
      font-family:TsangerYuMo;
    } 
  `;