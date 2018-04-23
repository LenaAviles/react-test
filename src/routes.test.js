import React from 'react';
import Routes from './routes';
import ShallowRenderer  from 'react-test-renderer/shallow';

it('renders Routes correctly', () => {
  const renderer = new ShallowRenderer()
  const tree = renderer
    .render(<Routes />);
  expect(tree).toMatchSnapshot();
});