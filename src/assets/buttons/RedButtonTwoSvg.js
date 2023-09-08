import * as React from 'react';
import Svg, {G, Path, Rect} from 'react-native-svg';

function RedButtonTwoSvg(props) {
  return (
    <Svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 380 180"
      {...props}>
      <Path
        d="M39.65 17.68c37.2-2.02 75.55-2.82 112.76-3.22 55.25-.37 114.07-.08 169.14 2.32l9.4.39 9.4.51c-73.64.96-227.08.96-300.7 0z"
        fill="#262020"
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
          fill="#971f3d"
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
        fill="#f0415b"
        strokeWidth={0}
      />
      <Path
        d="M39.65 18.77c92.95-3.97 188.92-3.89 281.91-.8l9.4.34 9.4.45c-73.78.85-226.94.85-300.7 0z"
        fill="#f0798b"
        strokeWidth={0}
      />
    </Svg>
  );
}

export default RedButtonTwoSvg;

// <Svg
//   id="Layer_2"
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="0 0 380 179.65"
//   {...props}>
//   <Defs></Defs>
//   <G id="Layer_1-2">
//     <G id="redx2">
//       <Path
//         className="cls-1"
//         d="M39.65 17.51c37.2-2.02 75.55-2.82 112.76-3.22 55.25-.37 114.07-.08 169.14 2.32l9.4.39 9.4.51c-73.64.96-227.08.96-300.7 0z"
//       />
//       <G id="Play_button" filter="url(#drop-shadow-1)">
//         <Rect
//           x={5}
//           y={5}
//           width={370}
//           height={169.65}
//           rx={28}
//           ry={28}
//           fill="#971f3d"
//         />
//         <Path
//           d="M347 10c12.7 0 23 10.3 23 23v113.65c0 12.7-10.3 23-23 23H33c-12.7 0-23-10.3-23-23V33c0-12.7 10.3-23 23-23h314m0-10H33C14.8 0 0 14.8 0 33v113.65c0 18.2 14.8 33 33 33h314c18.2 0 33-14.8 33-33V33c0-18.2-14.8-33-33-33z"
//           fill="#272121"
//         />
//       </G>
//       <Rect
//         x={18.65}
//         y={18.65}
//         width={342.7}
//         height={142.35}
//         rx={21}
//         ry={21}
//         id="Play_button-2"
//         fill="#f0415b"
//       />
//       <Path
//         className="cls-1"
//         d="M39.65 18.47c92.95-3.97 188.92-3.89 281.91-.8l9.4.34 9.4.45c-73.78.85-226.94.85-300.7 0z"
//         style={{
//           fill: '#f0798b',
//         }}
//       />
//     </G>
//   </G>
// </Svg>
