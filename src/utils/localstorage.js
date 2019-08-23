/**
 * Checks if local storage is available
 */
export function isLocalStorageSuported() {
  if (typeof window === 'undefined') return false;
  else if (typeof window.localStorage !== 'undefined')
    return window.localStorage;
  else if (typeof localStorage !== 'undefined') return localStorage;
  else return false;
}
