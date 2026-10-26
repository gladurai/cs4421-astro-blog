import { afterEach, describe, expect, it, vi } from 'vitest';

import { logJson } from './logger';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('logJson', () => {
  it('writes a JSON log entry with context and metadata', () => {
    const output = vi.spyOn(console, 'info').mockImplementation(() => undefined);

    logJson('info', 'Health check completed', { status: 'ok' });

    expect(output).toHaveBeenCalledOnce();
    expect(JSON.parse(output.mock.calls[0][0])).toMatchObject({
      level: 'info',
      message: 'Health check completed',
      status: 'ok',
    });
  });
});
