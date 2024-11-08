import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { IconBase } from '@components';

export function EyeSlashIcon({ color = 'black', size = 28 }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path fill={color} d="M20.935 21.441a.69.69 0 0 0 .993 0 .69.69 0 0 0 0-.993L7.013 5.551a.7.7 0 0 0-.993 0 .71.71 0 0 0 0 .984zm.826-2.689c2.566-1.723 4.192-4.052 4.192-5.089 0-1.775-4.825-7.532-11.953-7.532-1.494 0-2.892.255-4.157.677l2.408 2.408a4.7 4.7 0 0 1 1.758-.343 4.786 4.786 0 0 1 4.816 4.799c0 .615-.132 1.213-.369 1.749zM14 21.204c1.608 0 3.102-.29 4.42-.773l-2.425-2.426a4.4 4.4 0 0 1-1.986.457c-2.68 0-4.817-2.189-4.825-4.79 0-.73.158-1.415.448-2.022L6.459 8.46c-2.733 1.758-4.412 4.166-4.412 5.203 0 1.784 4.913 7.541 11.953 7.541m2.813-7.717a2.766 2.766 0 0 0-3.06-2.76l3.042 3.033c.009-.08.017-.176.017-.273m-5.634.036c0 1.538 1.265 2.777 2.795 2.777.105 0 .202-.009.299-.018l-3.077-3.076c-.008.106-.017.211-.017.317" />
    </Svg>
  );
}
