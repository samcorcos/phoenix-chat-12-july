import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from 'redux/store'

import Home from './components/Home'
import Settings from './components/Settings'
import Chat from './components/Chat'

import './styles/reset.css'

const App = (props) => {
  return <div> { props.children } </div>
}

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="settings" component={Settings} />
      <Route path="chat" component={Chat} />
		</Route>
	</Router>, document.getElementById('root')
)
