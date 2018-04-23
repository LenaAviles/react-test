import React from 'react';
import Layout from './layout';
import { Switch } from 'react-router-dom';
import ShallowRenderer  from 'react-test-renderer/shallow';

jest.mock('react-router-dom', () => ({ Switch: 'Switch' }))

const mockProps = { children: <Switch />};

it('renders Layout correctly', () => {
  const renderer = new ShallowRenderer()  
  const tree = renderer
    .render(<Layout {...mockProps}/>);
  expect(tree).toMatchSnapshot();
});