/**
 * Created by Administrator on 2017-08-28.
 */
import originJsonp from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + params(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (error, data) => {
      if (!error) {
        resolve(data)
      } else {
        reject(error)
      }
    })
  })
}

function params(data) {
  let url = ''
  for (let key in data) {
    let value = data[key] !== undefined ? data[key] : ''
    url += '&' + key + '=' + value
  }
  return url ? url.substring(1) : ''
}
