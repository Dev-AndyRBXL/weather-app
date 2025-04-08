import { expect, test } from 'vitest';
import fetchNewTimeline from '../fetchNewTimeline';

test('fetches a new timeline, should return a json object', async () => {
  const data = await fetchNewTimeline();
  expect(data).toMatchObject({});
});
