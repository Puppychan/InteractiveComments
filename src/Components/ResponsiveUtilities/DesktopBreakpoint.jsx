import React from 'react'
import PropTypes from 'prop-types';

import Breakpoint from './Breakpoint'

const { object } = PropTypes;

const DesktopBreakpoint = (props) => {
  return (
    <Breakpoint name="desktop">
        {props.children}
    </Breakpoint>
  )
}

DesktopBreakpoint.propTypes = {
  children: object,
};

export default DesktopBreakpoint