import React from 'react'
import PropTypes from 'prop-types';

import Breakpoint from './Breakpoint'

const { object } = PropTypes;

const MobileBreakpoint = (props) => {

  return (
    <Breakpoint name="mobile">
        {props.children}
    </Breakpoint>
  )
}

MobileBreakpoint.propTypes = {
  children: object,
};

export default MobileBreakpoint