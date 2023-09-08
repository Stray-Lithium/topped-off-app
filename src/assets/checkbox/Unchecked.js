import * as React from 'react';
import Svg, {G, Rect} from 'react-native-svg';

function Unchecked(props) {
  return (
    <Svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 185.72 185.72"
      {...props}>
      <G id="Layer_1-2">
        <Rect
          width={185.72}
          height={185.72}
          rx={33.83}
          ry={33.83}
          fill="#27231f"
          opacity={0}
        />
        <Rect
          x={52.49}
          y={52.49}
          width={80.75}
          height={80.75}
          rx={14.71}
          ry={14.71}
          fill="none"
          stroke="#000000"
          strokeMiterlimit={10}
          strokeWidth="9.61px"
        />
      </G>
    </Svg>
  );
}

export default Unchecked;
