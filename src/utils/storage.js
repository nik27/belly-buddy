function storageAvailable(type) {
  let storage
  try {
    storage = window[type]
    const testItem = '__storage_test__'
    storage.setItem(testItem, testItem)
    storage.removeItem(testItem)
    return true
  } catch (error) {
    const quotaExceededErrorCode = 22
    const quotaExceededErrorCodeFF = 1014

    return (
      error instanceof DOMException &&
      (error.code === quotaExceededErrorCode ||
        // Firefox
        error.code === quotaExceededErrorCodeFF ||
        // everything except Firefox
        error.name === 'QuotaExceededError' ||
        // Firefox
        error.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      storage.length !== 0
    )
  }
}

const memoryStorage = {}

export function get(type, key) {
  if (type !== 'memory' && storageAvailable(type)) {
    return window[type].getItem(key)
  }
  return memoryStorage[key] || null
}

export function set(type, key, value) {
  if (type !== 'memory' && storageAvailable(type)) {
    window[type].setItem(key, value)
  }
  memoryStorage[key] = value
}

export function clear(type, key) {
  if (type !== 'memory' && storageAvailable(type)) {
    window[type].removeItem(key)
  }
  delete memoryStorage[key]
}

export const STORAGE_TYPES = {
  LOCAL_STORAGE: 'localStorage',
  MEMORY_STORAGE: 'memory',
  SESSION_STORAGE: 'sessionStorage'
}
