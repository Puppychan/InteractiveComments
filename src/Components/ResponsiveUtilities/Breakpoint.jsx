//https://stackoverflow.com/questions/69228336/how-to-call-useeffect-when-browser-is-resized
// https://medium.com/@techrally/react-responsive-its-pretty-cool-d61e5ed56d95
import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';

import { CommentsContext } from '../../Helpers/Contexts';
import MediaQuery from 'react-responsive';

import { BREAKPOINTS } from '../../Style/ConstantStyled';
// destructive props type
const { string, object } = PropTypes;

export default function Breakpoint(props) {
  const {setScreenSize} = useContext(CommentsContext)
  const breakpoint = BREAKPOINTS[props.name] || BREAKPOINTS.desktop;
  const handleWhenResize = () => {
    // props.name will print all names -> need condition
    if (window.matchMedia(breakpoint).matches) {
      setScreenSize(props.name)
    }
    
  }
  useEffect(() => {
    window.addEventListener('resize', handleWhenResize)
    return () => {
      window.removeEventListener('resize', handleWhenResize)
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