import React from 'react';
import App from './App';
import ShallowRenderer  from 'react-test-renderer/shallow';

it('renders App correctly', () => {
  const renderer = new ShallowRenderer()
  const tree = renderer
    .render(<App />);
  expect(tree).toMatchSnapshot();
});

