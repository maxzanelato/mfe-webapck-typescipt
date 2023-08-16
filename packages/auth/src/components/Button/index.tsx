import React from 'react';
import { CircularProgress, Button as MaterialButton } from '@material-ui/core';

import MaterialButtonProps from 'shared-types/interfaces/MaterialButtonProps';

import { useStyles } from './styles';

export const Button: React.FC<MaterialButtonProps> = ({
  children,
  loading,
  ...props
}) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <MaterialButton {...props}>{children}</MaterialButton>
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
};
