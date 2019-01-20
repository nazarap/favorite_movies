import _isFunction from 'lodash/isFunction'

/**
 * @function buildList - if callback is function return function with params
 * @param {Function|null} callback - callback function
 * @param params - params for callback function
 * @return {Function|null} - if callback is function return function, or return null
 */
export default (callback, ...params) => {
  return _isFunction(callback) ?
    () => callback(...params)
    : null
}