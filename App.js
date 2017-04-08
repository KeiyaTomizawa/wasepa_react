var React = require('react');
var ReactDOM = require('react-dom');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import SimpleCheckbox from './Checkbox';
import SimpleRadioButton from './RadioButton';
import SimpleTextField from './Text';

const Image = () => (
  <MuiThemeProvider>
   <Avatar src="images/ktomi.JPG" />
  </MuiThemeProvider>
);

const RadioButton = () => (
  <MuiThemeProvider>
    <SimpleRadioButton />
  </MuiThemeProvider>
);

const Checkbox = () => (
  <MuiThemeProvider>
    <SimpleCheckbox />
  </MuiThemeProvider>
);

const Text = () => (
  <MuiThemeProvider>
    <SimpleTextField />
  </MuiThemeProvider>
);

ReactDOM.render(
  <div>
    <h1>個人情報入力</h1>
    <Image />
    <Text />
    <RadioButton />
    <Checkbox />
  </div>,
  document.getElementById('app')
);

