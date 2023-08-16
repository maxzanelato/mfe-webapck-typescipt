import React, { useCallback } from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';

let timeout: any;

const DelayedField: React.FC<
  TextFieldProps & { inputDelay?: number }
> = (
  { inputDelay, onChange, ...props } = {
    inputDelay: 200,
    onChange: () => {},
  }
) => {
  const onChangeDebounce = useCallback((evt) => {
    timeout && clearTimeout(timeout);
    const target = evt.target;
    //@ts-ignore
    timeout = setTimeout(() => onChange({ target }), inputDelay);
  }, []);

  return (
    <TextField {...props} fullWidth onChange={onChangeDebounce} />
  );
};

export default DelayedField;
