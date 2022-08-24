import React from 'react';
import styled from 'styled-components';
import * as actionElements from 'design-system/constants/buttonActionElements';

const ButtonAction = ({
  children,
  element,
  href,
  onClick,
  theme,
  type,
  ...passThroughProps
}) => {
  return (
    <ButtonActionBase
      as={element}
      href={element === actionElements.a ? href : null}
      onClick={onClick}
      theme={theme}
      type={element === actionElements.button ? type : null}
      {...passThroughProps}
    >
      {children}
    </ButtonActionBase>
  );
};

export default ButtonAction;

const ButtonActionBase = styled.button`
  width: 160px;
  height: 48px;
`;
