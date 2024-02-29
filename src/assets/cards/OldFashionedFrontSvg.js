import * as React from 'react';
import Svg, {G, Rect, Path} from 'react-native-svg';

function OldFashionedFrontSvg(props) {
  return (
    <Svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 959.07 1339.66"
      {...props}>
      <G id="Layer_1-2">
        <Rect
          id="card_fill"
          x={0}
          y={0}
          width={959.07}
          height={1339.66}
          rx={45.67}
          ry={45.67}
          fill="#d2223e"
          strokeWidth={0}
        />
        <Path
          d="M923.74 187.43c25.07 124.63-39.54 241.18 34.87 352.07v83.22c-77.9-45.94-125.36-102.11-101.7-190.06 16.13-68.61 51.88-123.6 32.39-195.69C862.54 137.94 768.83 82.24 714.07.64h-61.69c24.66 179.19-123.34 106.46-227.54 305.99-32.84 62.89-95.43 28.05-103.43-35.35-6.98-55.33 11.12-105.71 21.15-158.95 6.61-36.64 11.83-74.09 14.42-111.68h-55.42c1.31 87.25-9.38 174.8-23.57 261.46-17.05 77.28-20.21 194.6 90.2 184.02 104.53-14.99 137.76-159.12 208.88-221.78 54.8-48.28 146.97-77 206.5-22.72 174.81 159.39-239.01 680.88 175.03 869.7V46.27c0-25.2-20.43-45.63-45.63-45.63h-83.73c30.19 58.58 79.12 110.41 94.48 186.79zM325.82 83.6s.02-.04.02-.06c0 .03-.02.06-.03.1 0 .02-.02.05-.03.07.02-.04.03-.08.04-.11zm632.79 661.43c-25.94-10.89-64.18-26.51-78.36-1.29-30.67 54.52 29.75 88.17 78.36 110.57v126.66S734.95 799.03 849.57 694.35c40.89-37.34 109.04 7.13 109.04 7.13v43.54zM412.92.64h185.02c.24 46.03-12.19 81.17-79.65 68.47-81.13-15.27-50.74 70.1-85.33 87.52-31.7 15.96-50.26-26.14-42.08-76.79 4.72-29.18 14.74-54.15 22.04-79.21zm39.82 234.37c.25-.37.51-.77.79-1.11-.05.07-.26.39-.79 1.11zM479.14 1339H228.58c-7.26-107.14 124.78-64.83 164.52-94.07 99.87-73.51-71.41-183.68-13.55-218.14 37.73-22.48 72.92-21.58 95.67 19.42 17.04 30.71 4.31 65.12-9.4 117.26-19.9 75.72 94.44 117.24 13.71 175.23-.15.11-.26.21-.39.31zm-334.74-39.34c64.39-130.63 139.52-83.17 186.28-118.47 69.25-52.28-137.92-127.98 79.02-232.44 30.18-14.53 62.51-11.81 92.78 21.94 41.32 46.08 15.81 102.15 42.16 180.46 20.98 62.34 86.25 127.82 38.68 187.54-.08.1-.24.21-.42.31h261.06H659.9c40.57-165.69-126.12-181.01-77.35-304.59 36.16-91.62-43.96-147.8-91.5-154.32-110.15-15.11-168.43-9.66-202.69 77.95-24.94 63.78 1.27 109.97-51.67 168.76-43.98 48.84-170.7 105.24-236.23 107.95v-54.74c384.86-51.58 104.05-387.94 429.91-373.1 108.61 4.95 213.54 74.09 244.52 236.54 16.13 84.59 107.07 107.17 110.62 194.7 2.4 59.08 27.81 87.88 58.45 100.86h69.03c14.21 0 26.89-6.5 35.26-16.68-70.74-97.98-340.7-273.31-218.49-848.68 11.37-53.52-29.98-147.38-95.08-156.73-145.51-20.9-147.17 301.77-309.28 221.92C174.68 398.42 270.8 185.4 254.06.64h-69.14c9.37 30.98 16.22 62.38 20.77 92.94 18.03 120.85-16.86 238.37-3.88 358.07 10.19 94.03 96.69 177.4 194.65 145.59 76.89-24.97 119.58-110.66 165.45-171.4 14.93-19.76 36.52-37.3 61.05-36.43 18.75.67 36.02 12.45 46.53 28.2 37.28 55.89 19.35 154.3 15.39 217.06-3.12 49.39-13.84 103.14-42.32 144.3-34.91 50.44-86.8 27.1-130.51 3.84-85.28-45.38-169.69-52.51-253.6 3.47-10.07 6.72-19.71 14.2-27.92 23.15-46.17 50.33-50 132.53-87.44 189.97C109.07 1051.59 58 1091.13.45 1111.32v-125.3c69.48-33.54 111.98-119.12 153.47-187.08 58.66-96.08 155.29-140.72 264.38-118.82 62.15 12.47 121.85 36.05 176.93-10.64 45.54-38.6 83.86-114.95 43.96-171.36-19.49-27.56-51.17-18.26-72.04 2.44-32.83 32.58-54.06 77.3-91.59 104.78-29.81 21.84-66.38 31.97-102.53 33.61-70.54 3.2-149.82-25.64-192.4-85.23C84.58 419.28 164.1 204.28 16.11 99.45c-4.09-2.89-9.37-6.38-15.65-10.3V46.26v1247.12c0 25.2 20.43 45.63 45.63 45.63h182.5-124.08c13.9-12.46 31.63-22.57 39.89-39.34zM.46 742.89c23.08-22.02 40.36-50.99 47.83-82.83 17.74-75.68 7.13-164.34-32.28-231.38-4.68-7.97-9.88-15.84-15.55-23.5v-95.15c127.15 120.43 172.31 439.9 0 542.16v-109.3z"
          fill="#db2c41"
          strokeWidth={0}
        />
        <Path
          id="card_outline"
          d="M913.4 13c18.01 0 32.67 14.66 32.67 32.67v1248.32c0 18.01-14.66 32.67-32.67 32.67H45.67c-18.01 0-32.67-14.66-32.67-32.67V45.67C13 27.66 27.66 13 45.67 13H913.4m0-13H45.67C20.45 0 0 20.45 0 45.67v1248.32c0 25.22 20.45 45.67 45.67 45.67H913.4c25.22 0 45.67-20.45 45.67-45.67V45.67C959.07 20.45 938.62 0 913.4 0z"
          strokeWidth={0}
          fill="#27231f"
        />
      </G>
    </Svg>
  );
}

export default OldFashionedFrontSvg;