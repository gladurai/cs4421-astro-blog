import type { APIRoute } from 'astro';
import { logJson } from '../../utils/logger';

export const GET: APIRoute = async () => {
	const timestamp = new Date().toISOString();
	const uptime = process.uptime();

	logJson('info', 'Health check requested', {
		route: '/api/health',
		status: 'ok',
		version: 'v2',
		uptime,
	});

	return new Response(
		JSON.stringify({
			status: 'ok',
			version: 'v2',
			uptime,
			timestamp,
		}),
		{ status: 500, headers: { 'Content-Type': 'application/json' } },
	);
};
