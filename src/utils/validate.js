export function isvalidUsername (name) {
  const validMap = ['tangem', 'admin']
  return validMap.indexOf(name.trim()) >= 0
}
