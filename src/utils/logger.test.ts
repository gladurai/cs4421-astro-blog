import { afterEach, describe, expect, it, vi } from 'vitest';

import { logJson } from './logger';

afterEach(() => {
	vi.restoreAllMocks();
});

describe('logJson', () => {
	it('writes structured JSON with level, message, timestamp, and fields', () => {
		const info = vi.spyOn(console, 'info').mockImplementation(() => {});

		logJson('info', 'Health check requested', { route: '/api/health' });

		expect(info).toHaveBeenCalledOnce();
		expect(JSON.parse(info.mock.calls[0][0])).toMatchObject({
			level: 'info',
			message: 'Health check requested',
			route: '/api/health',
		});
		expect(JSON.parse(info.mock.calls[0][0]).timestamp).toBeTruthy();
	});
});
