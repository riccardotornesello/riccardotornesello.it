import React from 'react';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    position: 'relative',
  },
  cardLink: {
    height: '30px',
    width: '4px',
    backgroundColor: theme.colors.gray[4],
    margin: '0 0 0 20%',
    padding: 0,
  },
  dot: {
    height: '10px',
    width: '10px',
    borderRadius: '50%',
    backgroundColor: theme.colors.gray[4],
    margin: '0 0 0 20%',
    position: 'absolute',
    zIndex: -1,
    transform: 'translate(-50%, -50%)',
  },
  topDot: {
    top: '0',
    left: '2px',
  },
  bottomDot: {
    left: '2px',
    bottom: '-10px',
  },
}));

export function CardLink(): JSX.Element {
  const { cx, classes } = useStyles();

  return (
    <div className={classes.container}>
      <div className={cx(classes.dot, classes.topDot)}></div>
      <div className={cx(classes.dot, classes.bottomDot)}></div>
      <div className={classes.cardLink}></div>
    </div>
  );
}
