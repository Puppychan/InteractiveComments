import React from 'react'
import PropTypes from 'prop-types';

import Breakpoint from './Breakpoint'

const { object } = PropTypes;

const TabletBreakpoint = (props) => {

  return (
    <Breakpoint name="tablet">
        {props.children}
    </Breakpoint>
  )
}

TabletBreakpoint.propTypes = {
  children: object,
};

export default TabletBreakpoint