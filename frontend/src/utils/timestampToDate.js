export function timestampToDate(timestamp) {
  const date = new Date(timestamp)
  return date.toDateString()
}