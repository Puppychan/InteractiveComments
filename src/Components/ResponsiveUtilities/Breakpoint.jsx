//https://stackoverflow.com/questions/69228336/how-to-call-useeffect-when-browser-is-resized
import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';

import { CommentsContext } from '../../Helpers/Contexts';
import MediaQuery from 'react-responsive';

const breakpoints = {
  desktop: '(min-width: 1025px)',
  tablet: '(min-width: 768px) and (max-width: 1024px)',
  mobile: '(max-width: 767px)',
};

// destructive props type
const { string, object } = PropTypes;

export default function Breakpoint(props) {
  const {setDimension} = useContext(CommentsContext)
  const breakpoint = breakpoints[props.name] || breakpoints.desktop;
  const handleWhenResize = () => {
    // props.name will print all names -> need condition
    if (window.matchMedia(breakpoint).matches) {
      setDimension(props.name)
    }
    
  }
  useEffect(() => {
    window.addEventListener('resize', handleWhenResize)
    return () => {
      window.removeEventListener(handleWhenResize)
    }
    
  }, [])
  
  return (
    <MediaQuery {...props} query={breakpoint}>
      {props.children}
    </MediaQuery>
  );
}

// assign datatype to props
Breakpoint.propTypes = {
  name: string,
  children: object,
}