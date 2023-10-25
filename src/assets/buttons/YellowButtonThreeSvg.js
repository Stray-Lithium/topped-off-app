import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function YellowButtonThreeSvg(props) {
  return (
    <Svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 580 180"
      {...props}>
      <Rect
        x={10}
        y={10}
        width={560}
        height={160}
        rx={23.05}
        ry={23.05}
        fill="#977a00"
        strokeWidth={0}
      />
      <Path
        d="M546.95 10C559.68 10 570 20.32 570 33.05v113.9c0 12.73-10.32 23.05-23.05 23.05H33.05C20.32 170 10 159.68 10 146.95V33.05C10 20.32 20.32 10 33.05 10h513.9m0-10H33.05C14.83 0 0 14.83 0 33.05v113.9C0 165.17 14.83 180 33.05 180h513.9c18.22 0 33.05-14.83 33.05-33.05V33.05C580 14.83 565.17 0 546.95 0z"
        strokeWidth={0}
        fill="#262020"
      />
      <Rect
        x={22.09}
        y={18.67}
        width={535.81}
        height={142.66}
        rx={21.05}
        ry={21.05}
        fill="#ffcd00"
        strokeWidth={0}
      />
      <Path
        d="M42.79 18.49c152.83-3.94 310.65-3.82 463.52-.8l15.45.34 15.45.45c-122.06.85-372.4.85-494.43 0z"
        fill="#ffe980"
        strokeWidth={0}
      />
    </Svg>
  );
}
export default YellowButtonThreeSvg;
