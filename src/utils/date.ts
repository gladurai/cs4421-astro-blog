export function formatDate(date: Date): string {
  if (Number.isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  return date.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
