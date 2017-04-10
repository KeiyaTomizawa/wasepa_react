var React = require('react');
var ReactDOM = require('react-dom');
//import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderInfo from './pages/Header';
import AddInfo from './pages/Add';
import MypageInfo from './pages/Mypage';


ReactDOM.render(
  <div>
    <HeaderInfo />
    <AddInfo />
    <MypageInfo />
  </div>,
  document.getElementById('app')
);
