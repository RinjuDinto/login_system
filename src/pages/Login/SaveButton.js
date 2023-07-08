import React from 'react';
import { Button } from 'antd';

export default function SaveButton(props) {
  const { formSubmit } = props;

  return (
    <Button
      key="SaveButton"
      type="primary"
      onClick={() => formSubmit() }
      block
    >
      Sign in
    </Button>
  );
}