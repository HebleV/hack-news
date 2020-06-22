import axios from 'axios';
import {
  getStory,
} from '../services/api';
import { Story, emptyStory } from '../fixtures';

jest.mock('axios');

describe('HackerNews Api call', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getStory call', () => {
    it('Calls the HackerNews Api and requests for news', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: Story })
      );
      const entity = await getStory(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(entity).toEqual(Story);
    });
  });
});