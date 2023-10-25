import * as React from 'react';
import Svg, {G, Path, Rect, Defs} from 'react-native-svg';

function YellowPlusButton(props) {
  return (
    <Svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      {...props}>
      <Defs></Defs>
      <Path
        d="M49.82 27.68c16.66-2.74 33.37-3.25 50.18-3.4 16.8.16 33.52.68 50.18 3.4v.4c-25.01.19-75.35.19-100.36 0v-.4z"
        fill="#f0798b"
        strokeWidth={0}
      />
      <G id="Play_button">
        <Rect
          x={20.17}
          y={20.17}
          width={159.66}
          height={159.65}
          rx={23}
          ry={23}
          fill="#977a00"
          strokeWidth={0}
        />
        <Path
          d="M156.83 20.17c12.7 0 23 10.3 23 23v113.65c0 12.7-10.3 23-23 23H43.17c-12.7 0-23-10.3-23-23V43.17c0-12.7 10.3-23 23-23h113.66m0-10H43.17c-18.2 0-33 14.8-33 33v113.65c0 18.2 14.8 33 33 33h113.66c18.2 0 33-14.8 33-33V43.17c0-18.2-14.8-33-33-33z"
          strokeWidth={0}
          fill="#262020"
        />
      </G>
      <Rect
        x={28.82}
        y={28.82}
        width={142.36}
        height={142.35}
        rx={21}
        ry={21}
        id="Play_button-2"
        fill="#ffcd00"
        strokeWidth={0}
      />
      <Path
        d="M49.71 28.49c16.71-2.44 33.46-2.89 50.29-3.02 16.82.14 33.57.6 50.29 3.02 1.36.93-50.74.25-50.29.53l-50.29-.18v-.36z"
        fill="#ffe980"
        strokeWidth={0}
      />
      <Path
        className="cls-2"
        d="M136.62 105.51H63.38c-3.04 0-5.51-2.47-5.51-5.51s2.47-5.51 5.51-5.51h73.24c3.04 0 5.51 2.47 5.51 5.51s-2.47 5.51-5.51 5.51z"
      />
      <Path
        className="cls-2"
        d="M100 142.13c-3.04 0-5.51-2.47-5.51-5.51V63.38c0-3.04 2.47-5.51 5.51-5.51s5.51 2.47 5.51 5.51v73.24c0 3.04-2.47 5.51-5.51 5.51z"
      />
    </Svg>
  );
}

export default YellowPlusButton;
