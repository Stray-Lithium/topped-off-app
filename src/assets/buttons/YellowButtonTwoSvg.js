import * as React from 'react';
import Svg, {G, Path, Rect} from 'react-native-svg';

function YellowButtonTwoSvg(props) {
  return (
    <Svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 380 180"
      {...props}>
      <Path
        d="M39.65 17.68c37.2-2.02 75.55-2.82 112.76-3.22 55.25-.37 114.07-.08 169.14 2.32l9.4.39 9.4.51c-73.64.96-227.08.96-300.7 0z"
        fill="#fff"
        strokeWidth={0}
      />
      <G id="Play_button">
        <Rect
          x={10}
          y={10.17}
          width={360}
          height={159.65}
          rx={23}
          ry={23}
          fill="#977a00"
          strokeWidth={0}
        />
        <Path
          d="M347 10.17c12.7 0 23 10.3 23 23v113.65c0 12.7-10.3 23-23 23H33c-12.7 0-23-10.3-23-23V33.17c0-12.7 10.3-23 23-23h314m0-10H33c-18.2 0-33 14.81-33 33v113.65c0 18.2 14.8 33 33 33h314c18.2 0 33-14.8 33-33V33.17c0-18.2-14.8-33-33-33z"
          strokeWidth={0}
          fill="#262020"
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
        fill="#ffcd00"
        strokeWidth={0}
      />
      <Path
        d="M39.65 18.77c92.95-3.97 188.92-3.89 281.91-.8l9.4.34 9.4.45c-73.78.85-226.94.85-300.7 0z"
        fill="#ffe980"
        strokeWidth={0}
      />
    </Svg>
  );
}

export default YellowButtonTwoSvg;
