import React, { useEffect, useState } from 'react';
import { createStyles, keyframes } from '@mantine/core';
import { useInterval } from '@mantine/hooks';
import { Paper } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    display: 'flex',
    width: '250px',
    height: '150px',
    overflow: 'hidden',
    position: 'absolute',
    top: '280px',
    left: '-150px',
  },
  left: {
    flex: '60%',
    padding: '10px',
  },
  right: {
    flex: '40%',
    display: 'flex',
    alignItems: 'end',
  },
  number: {
    fontSize: '3rem',
  },
  description: {
    fontSize: '1rem',
  },
  box: {
    width: '15px',
    height: '25px',
    marginRight: '5px',
    border: `1px solid ${theme.colors.dark[5]}`,
  },
  boxContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  dot: {
    animation: `${dotAnimation} 15s linear infinite`,
  },
}));

export const dotAnimation = keyframes({
  '0%': { transform: 'translate(0, 0)' },
  '12.5%': { transform: 'translate(100px, 50px)' },
  '25%': { transform: 'translate(200px, 0)' },
  '37.5%': { transform: 'translate(100px, -50px)' },
  '50%': { transform: 'translate(200px, -100px)' },
  '62.5%': { transform: 'translate(300px, -50px)' },
  '75%': { transform: 'translate(200px, 0)' },
  '87.5%': { transform: 'translate(100px, -50px)' },
});

export function StatusCard() {
  const { classes } = useStyles();

  return (
    <Paper className={classes.card}>
      <div className={classes.left}>
        <div className={classes.number}>8</div>
        <div className={classes.description}>Pull requests</div>
        <StatusBoxes />
      </div>
      <div className={classes.right}>
        <TriangleGrid />
      </div>
    </Paper>
  );
}

export function TriangleGrid() {
  const { classes } = useStyles();

  return (
    <svg
      width='100%'
      viewBox='-10 0 300 300'
      style={{ stroke: '#149414', strokeWidth: 2 }}
    >
      <line x1='0' y1='150' x2='300' y2='0' />
      <line x1='0' y1='150' x2='300' y2='300' />
      <line x1='100' y1='100' x2='300' y2='200' />
      <line x1='100' y1='200' x2='300' y2='100' />
      <line x1='200' y1='50' x2='300' y2='100' />
      <line x1='200' y1='250' x2='300' y2='200' />
      <circle
        cx='0'
        cy='150'
        r='10'
        strokeWidth={0}
        fill='#149414'
        className={classes.dot}
      />
    </svg>
  );
}

export function StatusBoxes() {
  const { classes } = useStyles();

  const availableColors = [
    {
      border: '#FF3333',
      background: '#660000',
    },
    {
      border: '#FF3333',
      background: '#660000',
    },
    {
      border: '#FFFF33',
      background: '#666600',
    },
    {
      border: '#33FF33',
      background: '#336600',
    },
  ];

  const randomColors = () => {
    return Array.from(
      { length: 6 },
      () => availableColors[Math.floor(Math.random() * availableColors.length)],
    );
  };

  const [colors, setColors] = useState(randomColors());

  const interval = useInterval(() => {
    setColors(randomColors());
  }, 2000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return (
    <div className={classes.boxContainer}>
      {colors.map((color, index) => (
        <div
          key={index}
          className={classes.box}
          style={{
            borderColor: color.border,
            backgroundColor: color.background,
          }}
        ></div>
      ))}
    </div>
  );
}
