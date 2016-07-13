import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'

import Sidebar from '../Sidebar'

export class Chat extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Sidebar />
        <div styleName="chat-wrapper">
          chat me bro
        </div>
      </div>
    )
  }
}

export default CSSModules(Chat, style)
