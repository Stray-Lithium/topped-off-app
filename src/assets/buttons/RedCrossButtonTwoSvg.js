import * as React from 'react';
import Svg, {Defs, Path, G, Rect} from 'react-native-svg';

function RedCrossButtonTwoSvg(props) {
  return (
    <Svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 380 180"
      {...props}>
      <Defs></Defs>
      <Path
        className="cls-5"
        d="M39.65 17.68c37.2-2.02 75.55-2.82 112.76-3.22 55.25-.37 114.07-.08 169.14 2.32l9.4.39 9.4.51c-73.64.96-227.08.96-300.7 0z"
      />
      <G id="Play_button">
        <Rect
          x={10}
          y={10.17}
          width={360}
          height={159.65}
          rx={23}
          ry={23}
          strokeWidth={0}
          fill="#971f3d"
        />
        <Path
          d="M347 10.17c12.7 0 23 10.3 23 23v113.65c0 12.7-10.3 23-23 23H33c-12.7 0-23-10.3-23-23V33.17c0-12.7 10.3-23 23-23h314m0-10H33c-18.2 0-33 14.81-33 33v113.65c0 18.2 14.8 33.01 33 33.01h314c18.2 0 33-14.8 33-33V33.17c0-18.2-14.8-33-33-33z"
          fill="#272121"
          strokeWidth={0}
        />
      </G>
      <Rect
        x={18.65}
        y={18.82}
        width={342.7}
        height={142.35}
        rx={21}
        ry={21}
        id="Play_button-2"
        fill="#f0415b"
        strokeWidth={0}
      />
      <Path
        className="cls-5"
        d="M39.65 18.65c92.95-3.97 188.92-3.89 281.91-.8l9.4.34 9.4.45c-73.78.85-226.94.85-300.7 0z"
        fill="#f0798b"
      />
      <Path
        className="cls-3"
        d="M222.87 131.9a5.5 5.5 0 01-4.72-2.66c-20-33.06-61.9-68.94-62.33-69.3-2.32-1.97-2.6-5.45-.62-7.77s5.45-2.6 7.77-.62c.44.38 11.02 9.41 24.31 22.8 17.93 18.07 31.49 34.62 40.3 49.19 1.58 2.6.74 5.99-1.86 7.57-.89.54-1.88.8-2.85.8z"
        fill="#272121"
      />
      <Path
        className="cls-3"
        d="M163.51 128.55a5.508 5.508 0 01-4.4-8.82c.26-.35 26.43-35.19 54.83-68.56a5.513 5.513 0 018.4 7.14c-28.17 33.1-54.14 67.68-54.4 68.03a5.516 5.516 0 01-4.41 2.21z"
        fill="#272121"
      />
    </Svg>
  );
}

export default RedCrossButtonTwoSvg;
