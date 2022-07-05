import React from 'react';
import { render } from '@testing-library/react';
import { BasicBodyText } from './body-text.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBodyText />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
