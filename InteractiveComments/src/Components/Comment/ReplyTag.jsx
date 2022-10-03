import React from 'react'
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { REPLY_TAG } from '../../Style/ConstantStyled'

const ReplyTag = ({replyTo}) => {
  return (
    // <Router></Router>
    // <a color={COLORS.replyTo} weight={BOLD_FONT}>@{replyTo}</a>
    <a href="" style={{
        color: REPLY_TAG.colors,
        fontWeight: REPLY_TAG.weight,
        textDecoration: "none",
        padding: REPLY_TAG.padding.desktop
    }}>@{replyTo}</a>
  )
}

export default ReplyTag