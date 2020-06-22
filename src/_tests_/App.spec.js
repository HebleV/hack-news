import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { App } from '../App';
import { Story } from '../fixtures';
import { getStory } from '../services/api';

beforeEach(cleanup);

jest.mock('../services/api', () => ({
  getStory: jest.fn(),
}));

test('renders the application', async () => {

  getStory.mockImplementation(() => Promise.resolve(Story));

  const { getByText } = render(<App />);
  await waitForElement(() => [
    expect(getByText('Hack-News')).toBeTruthy(),
    expect(getByText('Comments')).toBeTruthy(),
    expect(getByText('Vote Count')).toBeTruthy(),
    expect(getByText('Upvote')).toBeTruthy(),
    expect(getByText('News Details')).toBeTruthy(),
  ]);
});