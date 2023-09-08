import * as React from 'react';
import Svg, {G, Path, Rect} from 'react-native-svg';

function YellowPlusButton(props) {
  return (
    <Svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 179.66 179.65"
      {...props}>
      <G id="Layer_1-2">
        <Path
          d="M39.65 17.51c16.66-2.74 33.37-3.25 50.18-3.4 16.8.16 33.52.68 50.18 3.4v.4c-25.01.19-75.35.19-100.36 0v-.4z"
          fill="#f0798b"
        />
        <G id="Play_button" filter="url(#drop-shadow-1)">
          <Rect
            x={5}
            y={5}
            width={169.66}
            height={169.65}
            rx={28}
            ry={28}
            fill="#977a00"
          />
          <Path
            d="M146.66 10c12.7 0 23 10.3 23 23v113.65c0 12.7-10.3 23-23 23H33c-12.7 0-23-10.3-23-23V33c0-12.7 10.3-23 23-23h113.66m0-10H33C14.8 0 0 14.8 0 33v113.65c0 18.2 14.8 33 33 33h113.66c18.2 0 33-14.8 33-33V33c0-18.2-14.8-33-33-33z"
            fill="#262020"
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
          fill="#ffcd00"
        />
        <Path
          d="M39.54 18.32C56.25 15.88 73 15.43 89.83 15.3c16.82.14 33.57.6 50.29 3.02 1.36.93-50.74.25-50.29.53l-50.29-.18v-.36z"
          fill="#ffe980"
        />
        <G>
          <Path className="cls-6" d="M53.21 89.83L126.45 89.83" />
          <Path className="cls-6" d="M89.83 53.21L89.83 126.44" />
        </G>
      </G>
    </Svg>
  );
}

export default YellowPlusButton;
