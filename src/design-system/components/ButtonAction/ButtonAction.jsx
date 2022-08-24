import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import actionElements from 'design-system/constants/buttonActionElements';
import buttonActionThemes from 'design-system/constants/buttonActionThemes';
import * as COLORS from 'design-system/colors/index';

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

const buttonThemeStyles = {
  [buttonActionThemes.PRIMARY]: `
    background-color: ${COLORS.OCHRE};
    color: ${COLORS.WHITE};
    border-color: ${COLORS.OCHRE};

    &:hover {
      background-color: ${COLORS.OCHRE_LIGHT};
      border-color: ${COLORS.OCHRE_LIGHT};
    }

    &:active {
      background-color: ${COLORS.OCHRE_LIGHT};
      border-color: ${COLORS.OCHRE_LIGHT};
    }
  `,
  [buttonActionThemes.SECONDARY]: `
    background-color: ${COLORS.WHITE};
    color: ${COLORS.BLACK};
    border-color: ${COLORS.BLACK};

    &:hover {
      background-color: ${COLORS.BLACK};
      color: ${COLORS.WHITE};
    }

    &:active {
      background-color: ${COLORS.BLACK};
      color: ${COLORS.WHITE};
    }
  `,
  [buttonActionThemes.TERTIARY]: `
    background-color: ${COLORS.WHITE};
    color: ${COLORS.BLACK};
    border-color: ${COLORS.WHITE};
    opacity: 0.5;
    &::after {
      content: ">";
      color: ${COLORS.OCHRE};
      font-size: 20px;
      margin-left: 10px;
    }

    &:hover {
      color: ${COLORS.OCHRE};
    }

    &:active {
      color: ${COLORS.OCHRE};
    }
`,
};

const withThemeStyles = ({theme}) => buttonThemeStyles[theme];

const ButtonActionBase = styled.button`
  padding: 15px 5px;
  width: 160px;
  height: 48px;
  display: flex;
  border: 1px solid;
  justify-content: center;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  ${withThemeStyles}
`;
