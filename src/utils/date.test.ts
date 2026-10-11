import { describe, expect, it } from 'vitest';

import { formatDate } from './date';

describe('formatDate', () => {
  it('formats a valid date in month, day, year format', () => {
    const date = new Date(2021, 7, 8);

    expect(formatDate(date)).toBe('Aug 8, 2021');
  });

  it('returns Invalid Date for an invalid Date object', () => {
    const invalidDate = new Date('invalid-date');

    expect(formatDate(invalidDate)).toBe('Invalid Date');
  });
});
