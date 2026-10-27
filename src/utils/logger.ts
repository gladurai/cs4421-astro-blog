export type LogLevel = 'info' | 'warn' | 'error';

export function logJson(
	level: LogLevel,
	message: string,
	fields: Record<string, unknown> = {},
): void {
	console[level](
		JSON.stringify({
			...fields,
			timestamp: new Date().toISOString(),
			level,
			message,
		}),
	);
}
