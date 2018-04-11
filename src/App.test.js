import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import ShallowRenderer  from 'react-test-renderer/shallow';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MuiThemeProvider><App /></MuiThemeProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<MuiThemeProvider><App /></MuiThemeProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders shallow correctly', () => {
  const renderer = new ShallowRenderer()
  const tree = renderer
    .render(<App />);
  expect(tree).toMatchSnapshot();
});

