import * as React from 'react';
import Svg, {G, Rect, Path} from 'react-native-svg';

function Checked(props) {
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
          stroke="#000000"
          strokeWidth="12px"
          fill="none"
          strokeMiterlimit={10}
        />
        <G>
          <Path
            d="M33.19 139.28S96.2 70.8 156.53 55.86M93.98 18.43s-19.14 91.07 3.75 148.85"
            fill="none"
            strokeMiterlimit={10}
            stroke="#ffcf00"
            strokeLinecap="round"
            strokeWidth="11.54px"
          />
        </G>
      </G>
    </Svg>
  );
}

export default Checked;
