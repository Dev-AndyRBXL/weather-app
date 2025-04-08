import { expect, test, describe } from 'vitest';
import { to12HourClock } from './to12HourClock';

describe('to12HourClock', () => {
  test('converts 00:00 to 12:00 AM', () => {
    expect(to12HourClock('00:00')).toBe('12:00 AM');
  });

  test('converts 01:15 to 1:15 AM', () => {
    expect(to12HourClock('01:15')).toBe('1:15 AM');
  });

  test('converts 12:00 to 12:00 PM', () => {
    expect(to12HourClock('12:00')).toBe('12:00 PM');
  });

  test('converts 13:45 to 1:45 PM', () => {
    expect(to12HourClock('13:45')).toBe('1:45 PM');
  });

  test('converts 23:59 to 11:59 PM', () => {
    expect(to12HourClock('23:59')).toBe('11:59 PM');
  });

  test('converts 06:30 to 6:30 AM', () => {
    expect(to12HourClock('06:30')).toBe('6:30 AM');
  });

  test('converts 18:45 to 6:45 PM', () => {
    expect(to12HourClock('18:45')).toBe('6:45 PM');
  });
});
