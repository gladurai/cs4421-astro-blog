export type JsonLogLevel = 'info' | 'warn' | 'error';

export function logJson(
  level: JsonLogLevel,
  message: string,
  context: Record<string, unknown> = {},
): void {
  const entry = {
    ...context,
    timestamp: new Date().toISOString(),
    level,
    message,
  };

  console[level](JSON.stringify(entry));
}
