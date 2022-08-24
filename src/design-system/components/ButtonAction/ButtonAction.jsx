import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as actionElements from 'design-system/constants/buttonActionElements';
import * as buttonActionThemes from 'design-system/constants/buttonActionThemes';

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

ButtonAction.propTypes = {
  children: PropTypes.node.isRequired,
  /*
   * ButtonAction can be configured to render either an HTML anchor element or
   * and HTML button element.
   *
   *  By default, ButtonAction will render a button element.
   * Valid element types are referenced through the actionElements enum:
   * "design-system/constants/buttonActionElements".
   * */
  element: PropTypes.oneOf(Object.values(actionElements)),
  /**
   * When ButtonAction renders an anchor element, href is required
   * */
  href: (props) => {
    if (!props.href && props.element === actionElements.a) {
      return new Error('The href prop is required when ButtonAction is a link');
    }

    if (typeof props.href !== 'string' && props.element === actionElements.a) {
      return new Error('href must be a string');
    }

    return null;
  },
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
   * Determines background and text color of ButtonAction.
   * Values for the theme prop are imported from the buttonActionThemes.
   * */
  theme: PropTypes.oneOf(Object.values(buttonActionThemes)),
};

ButtonAction.defaultProps = {
  element: actionElements.button,
  href: null,
  onClick: null,
  theme: buttonActionThemes.PRIMARY,
  type: 'submit',
};

const ButtonActionBase = styled.button`
  width: 160px;
  height: 48px;
`;
