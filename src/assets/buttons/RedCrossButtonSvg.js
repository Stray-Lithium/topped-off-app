import * as React from 'react';
import Svg, {Defs, G, Path, Rect} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, filter */

function RedCrossButtonSvg(props) {
  return (
    <Svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 179.66 179.65"
      {...props}>
      <Defs></Defs>
      <G id="Layer_1-2">
        <Path
          className="cls-1"
          d="M39.65 17.51c16.66-2.74 33.37-3.25 50.18-3.4 16.8.16 33.52.68 50.18 3.4v.4c-25.01.19-75.35.19-100.36 0v-.4z"
        />
        <G id="Play_button" filter="url(#drop-shadow-1)">
          <Rect
            x={5}
            y={5}
            width={169.66}
            height={169.65}
            rx={28}
            ry={28}
            fill="#971f3d"
          />
          <Path
            d="M146.66 10c12.7 0 23 10.3 23 23v113.65c0 12.7-10.3 23-23 23H33c-12.7 0-23-10.3-23-23V33c0-12.7 10.3-23 23-23h113.66m0-10H33C14.8 0 0 14.8 0 33v113.65c0 18.2 14.8 33 33 33h113.66c18.2 0 33-14.8 33-33V33c0-18.2-14.8-33-33-33z"
            fill="#272121"
          />
        </G>
        <Rect
          x={18.65}
          y={18.65}
          width={142.36}
          height={142.35}
          rx={21}
          ry={21}
          id="Play_button-2"
          fill="#f0415b"
        />
        <Path
          className="cls-1"
          d="M39.54 18.32C56.25 15.88 73 15.43 89.83 15.3c16.82.14 33.57.6 50.29 3.02 1.36.93-50.74.25-50.29.53l-50.29-.18v-.36z"
        />
        <G>
          <Path
            d="M60.09 56.5s42.76 36.4 63.47 70.64M64.2 123.8s26-34.67 54.61-68.29"
            fill="none"
            stroke="#262020"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="11.02px"
          />
        </G>
      </G>
      <Path
        d="M39.54 18.32C56.25 15.88 73 15.43 89.83 15.3c16.82.14 33.57.6 50.29 3.02 1.36.93-50.74.25-50.29.53l-50.29-.18v-.36Z"
        className="cls-1"
        style={{
          fill: '#f0798b',
        }}
      />
    </Svg>
  );
}

export default RedCrossButtonSvg;
