import React, { memo } from 'react';
import style from './style.scss';

function MusicAr(props: { title: string }) {
  return (
    <div className={style.musicAr}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="30 0 340 340">
        <defs>
          <clipPath id="music-ar-circle">
            <circle cx="200" cy="170" r="170" />
          </clipPath>
          <clipPath id="music-ar-mic">
            <path d="M250.47,92.71a34.16,34.16,0,1,1-15.81-45.65A34.16,34.16,0,0,1,250.47,92.71Z" />
          </clipPath>
        </defs>
        <g style={{ clipPath: 'url(#music-ar-circle)' }}>
          <g>
            {/* line */}
            <path className={style.line} style={{ animationDelay: '.6s' }} d="M1.19,101.34c29-3.64,56.9,1.56,82.19,16.28,23.29,13.56,43,32.31,64,49,22.18,17.57,46.58,35.12,75.35,38.88,26.65,3.48,52.49-5.05,77.17-14.11,30.38-11.15,61.3-22.87,94.25-18.18" />
            <path className={style.line} style={{ animationDelay: '.7s' }} d="M1.19,110.78c29-3.64,56.89,1.56,82.19,16.29,23.29,13.56,43,32.31,64,49,22.18,17.56,46.58,35.11,75.35,38.87,26.65,3.48,52.49-5.05,77.17-14.11,30.38-11.15,61.3-22.87,94.25-18.18" />
            <path className={style.line} style={{ animationDelay: '.8s' }} d="M1.19,120.23c29-3.65,56.89,1.55,82.19,16.28,23.29,13.56,43,32.31,64,49C169.59,203,194,220.58,222.76,224.34c26.65,3.48,52.49-5.05,77.17-14.11,30.38-11.15,61.3-22.87,94.25-18.18" />
            <path className={style.line} style={{ animationDelay: '.9s' }} d="M1.19,129.67c29-3.64,56.89,1.56,82.19,16.28,23.29,13.56,43,32.31,64,49C169.59,212.47,194,230,222.76,233.78c26.65,3.49,52.49-5.05,77.17-14.11,30.38-11.15,61.3-22.86,94.25-18.18" />
            <path className={style.line} style={{ animationDelay: '1s' }} d="M1.19,139.11c29-3.64,56.89,1.56,82.19,16.29,23.29,13.56,43,32.31,64,48.95,22.18,17.56,46.58,35.11,75.35,38.87,26.65,3.49,52.49-5,77.17-14.1,30.38-11.15,61.3-22.87,94.25-18.18" />
          </g>
          <g>
            {/* deco */}
            <g style={{ fill: '#ffb31b' }}>
              {/* star */}
              <polygon points="299.98 146.63 305.01 152.01 306.22 144.75 312.89 141.63 306.36 138.24 305.46 130.93 300.21 136.09 292.98 134.69 296.27 141.28 292.7 147.72 299.98 146.63" />
              <polygon points="87 239.71 92.1 241.01 90.03 236.18 92.84 231.73 87.6 232.21 84.24 228.16 83.08 233.29 78.19 235.23 82.71 237.93 83.05 243.18 87 239.71" />
              <polygon points="131.55 67.48 124.78 73.72 123.95 64.55 115.94 60.04 124.4 56.42 126.2 47.4 132.26 54.33 141.4 53.27 136.69 61.16 140.52 69.53 131.55 67.48" />
            </g>
            <path style={{ fill: '#444' }} d="M311.39,94.64C310,88.9,308.51,83.17,307,77.3l-20.3,5.11c.1.46.17.81.26,1.17q2.19,8.72,4.39,17.45c.23.93.51,1.85.76,2.76a2.07,2.07,0,0,1-.35,1.56c-1.58,3.18-6.69,4.81-10.12,3.32a3.54,3.54,0,0,1-1.44-5.82,6.09,6.09,0,0,1,1-1,8.86,8.86,0,0,1,7.21-1.77c.32.05.64.14,1.16.25-1.73-7.52-3.78-14.8-5.47-22.22a6.1,6.1,0,0,1,.77-.32L306,72.47c1.13-.28,1.22-.26,1.52.91q1.81,7.17,3.61,14.34c.61,2.4,1.2,4.81,1.82,7.21.19.72.45,1.42.68,2.12a3.32,3.32,0,0,1-.27,3.15,8,8,0,0,1-5.61,3.43,7.45,7.45,0,0,1-4.15-.35c-2.8-1.11-3.5-3.85-1.47-6.08a8.5,8.5,0,0,1,8-2.62c.33,0,.65.14,1,.2C311.15,94.79,311.19,94.75,311.39,94.64Z" />
            <path style={{ fill: '#555' }} d="M79.35,206,86,193.29,68.29,184,67,186.32,60.91,198c-.4.77-.73,1.6-1.2,2.34a2.36,2.36,0,0,1-1,.73c-3.28,1.42-8-.8-9.45-4-1.16-2.48,0-4.75,2.7-5.12a8,8,0,0,1,7.33,2.94c.29.32.54.69.9,1.14a8.73,8.73,0,0,0,.67-1l9-17.16c.2-.39.45-.74.74-1.2l5,2.62q7.05,3.7,14.1,7.42c1,.52,1,.64.52,1.63q-3.31,6.36-6.66,12.71c-1.19,2.28-2.4,4.54-3.59,6.82-.43.81-.79,1.67-1.29,2.45a2.16,2.16,0,0,1-1,.73,6.86,6.86,0,0,1-5.89-.56,7.91,7.91,0,0,1-3.29-3c-1.55-2.7-.26-5.32,2.84-5.57a8.23,8.23,0,0,1,7.29,3.34c.17.21.32.43.49.63C79.1,205.91,79.15,205.91,79.35,206ZM70.1,180.45l-.88,1.85,17.68,9.28c.34-.63.62-1.16.95-1.8C81.91,186.66,76.09,183.61,70.1,180.45Z" />
            <path style={{ fill: '#333' }} d="M176,301.86c-.2-1.34-.39-2.69-.6-4Q173.73,286.9,172,276c-.22-1.42.19-1.87,1.64-1.83a19.11,19.11,0,0,1,2.27.18,9.39,9.39,0,0,1,8.23,7.86c.38,1.92.55,3.88.84,5.82a27.94,27.94,0,0,0,.5,2.76,3.85,3.85,0,0,0,3.24,3.16,1.54,1.54,0,0,1,.38.16,4.05,4.05,0,0,1-4.64-1.58,27.19,27.19,0,0,1-2.25-3.93c-.74-1.48-1.37-3-2.07-4.5a7,7,0,0,0-.79-1.24c-1.22-1.6-2.46-1.94-4.63-1.18.19,1.32.37,2.67.58,4q1.32,8.54,2.66,17.07c.1.65.31,1.29.47,1.94a4.09,4.09,0,0,1-.62,3.89,9.88,9.88,0,0,1-7.89,3.58,8.64,8.64,0,0,1-4-.83c-3.44-1.62-4-5.2-1.12-7.69a10.37,10.37,0,0,1,9.93-2.06c.34.09.67.22,1,.33C175.78,301.93,175.83,301.9,176,301.86Z" />
          </g>
          <g className={style.object}>
            <path style={{ fill: '#f2f2f2' }} d="M140.56,235.67c-1.7,12.79-7.44,24-19.1,30.22-10,5.38-21.73,6.94-32.83,8.62C67,277.79,42.2,281.67,32,303.9c-6.13,13.36-4.86,28.68,4.45,40.24,11.26,14,29.45,18.05,46.62,18,35.14-.17,79-18.71,107.56,10.79,22.8,23.57,19.59,62.54,5.41,89.6-.6,1.14,1.13,2.15,1.72,1,12.09-23.05,16.07-52.5,4.78-76.66a54.82,54.82,0,0,0-25.68-26.31c-16.51-8-35.06-7-52.77-4.74-21.42,2.7-44.54,8-65.67.91C41,350.87,27.55,334.56,30.49,315.53c2.2-14.25,11.78-25.48,24.74-31.18,10.83-4.76,22.82-6.23,34.41-8,11.91-1.81,24.6-3.58,35-10,11-6.81,16.21-18.16,17.88-30.67.17-1.28-1.84-1.26-2,0Z" />
            <path style={{ fill: '#f2f2f2' }} d="M348.62,281.1c-25.94-21.44-80.1-62.15-106.2-83.73.8-11.16,2.08-23.25,2.47-37.35a24.08,24.08,0,0,0-.17-2.67c-.34-4.28-2.07-7.16-5.42-10.61a159.18,159.18,0,0,0-28.44-22.81,20.48,20.48,0,0,0-5-1.75c-3.53-1.05-6.4-.32-9.1,2.49-8.66,9-17.54,17.81-26.33,26.69l-2.27,2.31c5,5.15,10.76,8.33,17.83,7,7.53-1.44,14.65-4,15.91-13.48,0,5,.6,7,3.68,9.43,3.45,2.73,6.33,2.59,10.22,1.68-4.33.74-22.11,18.52-8.86,42.14,0,0-18.23-13.44.93-38.54,0,0-3.82-2.45-8.06-4.87-7.25,12.14-16.36,20.95-22.15,21.12,1.18,5,1.33,9.12-3.14,13.53C171,195.1,168,199.38,162,198.17c.84,10.53-5.05,18.5-14.75,20.22l27.37,26.88,22.43,4.29c22.45,27,55.35,75.27,77.82,102.27" />
            <path style={{ fill: '#241a38' }} d="M147.87,239.11a5.77,5.77,0,0,1-7.72,2.68h0a5.78,5.78,0,0,1-2.68-7.73l2.62-5.4a5.78,5.78,0,0,1,7.73-2.68h0a5.78,5.78,0,0,1,2.68,7.73Z" />
            <path style={{ fill: '#30224b' }} d="M220.16,117.31,158.45,235c-2.69,5.54-8.49,3.67-15.2.41h0c-6.71-3.25-11.77-6.66-9.08-12.2l54.26-121.28" />
            <path style={{ fill: '#241a38', stroke: '#241a38', strokeWidth: '4' }} d="M250.47,92.71a34.16,34.16,0,1,1-15.81-45.65A34.16,34.16,0,0,1,250.47,92.71Z" />
            <path style={{ fill: '#573698' }} d="M166.18,226.32a2.09,2.09,0,0,1-2.8,1l-26.22-12.72a2.1,2.1,0,0,1-1-2.8h0a2.1,2.1,0,0,1,2.8-1l26.22,12.72a2.1,2.1,0,0,1,1,2.8Z" />
            <g style={{ clipPath: 'url(#music-ar-mic)', fill: '#795ead' }}>
              {/* mic line */}
              <path d="M243,28.84l-47.28,97.41c-.28.57.58,1.08.86.5l47.28-97.41c.28-.58-.58-1.08-.86-.5Z" />
              <path d="M249.27,31.9Q225.63,80.62,202,129.32c-.28.58.58,1.08.86.5l47.28-97.41c.28-.58-.59-1.09-.87-.51Z" />
              <path d="M255.6,35l-47.28,97.42c-.28.58.58,1.08.86.5l47.28-97.41c.28-.58-.58-1.09-.86-.51Z" />
              <path d="M261.92,38q-23.64,48.72-47.27,97.42c-.28.57.58,1.08.86.5l47.28-97.41c.28-.58-.58-1.08-.87-.51Z" />
              <path d="M217.64,16.55Q194,65.27,170.37,114c-.28.57.58,1.08.86.5l47.28-97.41c.28-.58-.58-1.09-.87-.51Z" />
              <path d="M224,19.62,176.69,117c-.28.58.58,1.08.87.5q23.63-48.71,47.27-97.41c.28-.58-.58-1.08-.86-.51Z" />
              <path d="M230.3,22.69,183,120.11c-.28.57.58,1.08.86.5L231.16,23.2c.28-.58-.58-1.08-.86-.51Z" />
              <path d="M205,10.41q-23.64,48.72-47.27,97.42c-.28.57.58,1.08.86.5l47.28-97.41c.28-.58-.58-1.08-.87-.51Z" />
              <path d="M211.32,13.48,164,110.9c-.28.57.58,1.08.86.5L212.18,14c.28-.58-.58-1.08-.86-.51Z" />
              <path d="M236.62,25.77l-47.28,97.41c-.28.57.59,1.08.87.5l47.28-97.41c.28-.58-.59-1.08-.87-.5Z" />
              <path d="M268.25,41.11,221,138.53c-.28.58.58,1.08.86.5l47.28-97.41c.28-.58-.58-1.08-.86-.51Z" />
              <path d="M274.58,44.19Q250.93,92.9,227.3,141.6c-.28.57.58,1.08.86.5l47.28-97.41c.28-.58-.58-1.08-.86-.5Z" />
              <path d="M280.9,47.25l-47.28,97.42c-.28.58.58,1.08.87.5l47.27-97.41c.28-.58-.58-1.09-.86-.51Z" />
              <path d="M170.78,54.59l97.41,47.27c.58.28,1.09-.58.51-.86L171.29,53.72c-.58-.28-1.09.58-.51.87Z" />
              <path d="M173.85,48.26l97.41,47.28c.58.28,1.09-.58.51-.86L174.36,47.4c-.58-.28-1.09.58-.51.86Z" />
              <path d="M176.92,41.93l97.41,47.28c.58.28,1.09-.58.51-.86L177.43,41.07c-.58-.28-1.09.58-.51.86Z" />
              <path d="M180,35.61,277.4,82.89c.58.28,1.09-.58.51-.86L180.5,34.75c-.58-.28-1.09.58-.51.86Z" />
              <path d="M158.5,79.89l97.41,47.28c.58.28,1.09-.59.51-.87L159,79c-.57-.28-1.08.58-.5.86Z" />
              <path d="M161.57,73.56,259,120.84c.58.28,1.09-.58.51-.86L162.08,72.7c-.58-.28-1.09.58-.51.86Z" />
              <path d="M164.64,67.24l97.41,47.28c.58.28,1.09-.59.51-.87L165.15,66.37c-.58-.28-1.09.59-.51.87Z" />
              <path d="M152.36,92.54l97.41,47.28c.58.28,1.09-.58.51-.87L152.86,91.68c-.57-.28-1.08.58-.5.86Z" />
              <path d="M155.43,86.21l97.41,47.28c.58.28,1.09-.58.51-.86L155.94,85.35c-.58-.28-1.09.58-.51.86Z" />
              <path d="M167.71,60.91l97.41,47.28c.58.28,1.09-.58.51-.86L168.21,60.05c-.57-.28-1.08.58-.5.86Z" />
              <path d="M183.06,29.28l97.42,47.28c.57.28,1.08-.58.5-.86L183.57,28.42c-.58-.28-1.09.58-.51.86Z" />
              <path d="M186.13,23l97.41,47.28c.58.28,1.09-.59.51-.87L186.64,22.09c-.58-.28-1.09.59-.51.87Z" />
              <path d="M189.2,16.63l97.41,47.28c.58.28,1.09-.58.51-.86L189.71,15.77c-.58-.28-1.09.58-.51.86Z" />
            </g>
            <path style={{ fill: '#795ead' }} d="M254.64,94.73a4.34,4.34,0,0,1-5.8,2l-62-30.09a4.35,4.35,0,0,1-2-5.81h0a4.34,4.34,0,0,1,5.8-2l62,30.09a4.34,4.34,0,0,1,2,5.8Z" />
            <path style={{ fill: '#241a38' }} d="M223,118.78a4.65,4.65,0,0,1-6.22,2.16l-29.07-14.11a4.65,4.65,0,0,1-2.16-6.22h0a4.65,4.65,0,0,1,6.22-2.15l29.07,14.11a4.64,4.64,0,0,1,2.16,6.21Z" />
            <g style={{ fill: '#f2f2f2' }}>
              {/* hand */}
              <path d="M142.89,214.09c5.88,4,17.2-4,16.29-11.85a8.38,8.38,0,0,0-2.24-4.63Q145.45,186,133.69,174.69c-3.9-3.78-8.1-3.59-11.94.28-.63.64-1.31,1.23-1.89,1.89-4.13,4.71-4.68,9.08-1.46,13.19Z" />
              <path d="M160.56,165.53c-4.1-4-8.17-8.07-12.3-12.06-3.77-3.65-8.28-3.54-12,.24-1.11,1.13-2.23,2.25-3.33,3.39-3.26,3.35-3.35,8.06,0,11.34q12.45,12.34,25,24.56a7.81,7.81,0,0,0,11.16,0c1.36-1.31,2.67-2.65,4-4a7.88,7.88,0,0,0-.19-11.4C168.78,173.55,164.66,169.55,160.56,165.53Z" />
              <path d="M193,162.39c-11.52,2.9-21,.35-28.16-8.56l9.88-10.06c-4.08-4-9.13-9.09-13.13-12.75-2.28-2.09-7.59-1.59-9.91.63-1.44,1.37-2.81,2.81-4.18,4.24a8.05,8.05,0,0,0,.17,11.63c8.13,8,16.23,16,24.42,23.94,4.31,4.17,8.72,4,12.92-.34,2-2.05,6.11-6.58,8-8.73Z" />
              <path d="M177.35,141.09l14.89-15.17c-3.47-3.4-7.54-7.88-11.36-11-2.72-2.22-7.3-1.34-9.72,1.09q-2,2-4,4a8.26,8.26,0,0,0-.21,10.81C169.93,134.07,173.94,137.74,177.35,141.09Z" />
              <path d="M186,160.64c7.53-1.44,14.65-4,15.91-13.48,0,5,.6,7,3.68,9.43,3.45,2.73,6.33,2.59,10.22,1.68-3.15.54-13.37,10.06-13.67,24.27a4.86,4.86,0,0,1,5.39-1.51c11.72,3.49,24,2.09,36.09,1.84.56-7.08,1.09-14.62,1.32-22.85a24.08,24.08,0,0,0-.17-2.67c-.34-4.28-2.07-7.16-5.42-10.61a159.18,159.18,0,0,0-28.44-22.81,20.48,20.48,0,0,0-5-1.75c-3.53-1.05-6.4-.32-9.1,2.49-8.66,9-17.54,17.81-26.33,26.69l-2.27,2.31C173.14,158.82,178.88,162,186,160.64Z" />
            </g>
          </g>
        </g>
      </svg >
      <div className={`${style.title} ${style.t2}`} style={{ color: '#eee' }}>{props.title}</div>
      <div className={`${style.title} ${style.t1}`} style={{ color: '#fff' }}>{props.title}</div>
    </div >
  )
}

export default memo(MusicAr);
