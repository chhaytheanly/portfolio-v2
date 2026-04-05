/**
 * Prepends the app baseURL to an absolute path.
 * Use this for any image path coming from content collections.
 * Example: imageBase('/project/course.png') → '/portfolio-v2/project/course.png'
 *
 * Update this value if your repository name changes.
 */
const APP_BASE_URL = '/portfolio-v2'

export function useImageBase() {
  return (path: string | undefined | null): string => {
    if (!path) return ''
    // If path is already prefixed with baseURL or is a full URL, return as-is
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith(APP_BASE_URL)) {
      return path
    }
    // Prepend baseURL for absolute paths
    if (path.startsWith('/')) {
      return APP_BASE_URL + path
    }
    return path
  }
}
