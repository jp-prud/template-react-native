import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { IconBase } from '@components';

export function ArrowIcon({ color = 'black', size = 28 }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path fill={color} d="M22.315 13.646c0-.273-.115-.537-.317-.73l-5.774-5.774c-.229-.22-.466-.317-.712-.317-.563 0-.967.396-.967.932 0 .281.114.518.29.694l1.977 2.004 2.55 2.33-2.04-.124H6.67c-.589 0-.993.404-.993.985 0 .57.404.975.993.975h10.652l2.04-.123-2.55 2.33-1.977 2.003a.97.97 0 0 0-.29.694c0 .537.404.932.967.932a1 1 0 0 0 .694-.299l5.792-5.792c.202-.193.316-.457.316-.72" />
    </Svg>
  );
}
