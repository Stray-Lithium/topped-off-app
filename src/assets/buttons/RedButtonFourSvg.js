import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const RedButtonFourSvg = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 790 180" {...props}>
    <Rect
      width={760}
      height={159.65}
      x={20}
      y={10}
      rx={23}
      ry={23}
      style={{
        fill: '#971f3d',
        filter: 'url(#a)',
        stroke: '#272121',
        strokeMiterlimit: 10,
        strokeWidth: 10,
      }}
    />
    <Rect
      width={740}
      height={142.35}
      x={30}
      y={18.65}
      rx={21}
      ry={21}
      style={{
        fill: '#f0415b',
      }}
    />
    <Path
      d="M51 18.53c215.79-3.93 438.54-3.82 654.38-.8l21.81.34 21.81.45c-172.82.85-525.22.85-698 0Z"
      style={{
        fill: '#f0798b',
      }}
    />
  </Svg>
);
export default RedButtonFourSvg;
