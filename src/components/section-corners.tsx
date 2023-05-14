import React from 'react';

export function SectionCorners(): JSX.Element {
  return (
    <div>
      <div
        style={{
          display: 'block',
          width: '200px',
          height: '100px',
          position: 'absolute',
          top: '0',
          left: '0',
          borderTop: '5px solid white',
          borderLeft: '5px solid white',
        }}
      ></div>
      <div
        style={{
          display: 'block',
          width: '200px',
          height: '100px',
          position: 'absolute',
          bottom: '0',
          right: '0',
          borderBottom: '5px solid white',
          borderRight: '5px solid white',
        }}
      ></div>
    </div>
  );
}
