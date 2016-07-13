import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'

export const Sidebar = () => {
  return (
    <div styleName="sidebar">
      <h3 styleName="name">John Smith</h3>
      <p styleName="time">Last active: {Math.floor((Math.random() * 10) + 1)} minutes ago.</p>
    </div>
  )
}

export default CSSModules(Sidebar, style)
