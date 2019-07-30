import React from 'react';
import { CircularProgress, withStyles } from '@material-ui/core';
import AppLoaderStyles from './AppLoader.styles';

interface IProps {
  classes: any;
}

const AppLoader = (props: IProps) => {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.progress} />
    </div>
  );
}

export default withStyles(AppLoaderStyles)(AppLoader);
