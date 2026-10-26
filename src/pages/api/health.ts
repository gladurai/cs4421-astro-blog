import type { APIRoute } from 'astro';
import { logJson } from '../../utils/logger';

export const GET: APIRoute = async () => {
  const uptime = process.uptime();
  const timestamp = new Date().toISOString();

  logJson('info', 'Health check completed', {
    status: 'ok',
    uptime,
  });

  return new Response(JSON.stringify({
    status: 'ok',
    uptime,
    timestamp,
  }), { status: 200, headers: { 'Content-Type': 'application/json' } });
};