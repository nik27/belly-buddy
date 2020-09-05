import { persistor } from '../redux'
import { clear, get } from './storage'

export const isLoggedIn = () => {
  const token = get('localStorage', 'token')

  if (
    token &&
    document.cookie.split(';').filter(item => item.includes(`Token=${token}`))
      .length
  ) {
    return true
  }
  return false
}

export const logout = () => {
  document.cookie =
    'Token=; path=/; max-age=0; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  clear('sessionStorage', 'token')
  clear('localStorage', 'user')
  clear('localStorage', 'persist:root')
  persistor.purge()
}
