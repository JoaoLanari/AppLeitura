/**
 * Código copiado do stackoverflow na seguinte url: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 */
export function makeid() {
  let text = ""
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  for (let i = 0; i < 20; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}