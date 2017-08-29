/**
 * Created by Administrator on 2017-08-28.
 */
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }

  let classArray = className.split(' ')
  classArray.push(className)
  el.className = classArray.join(' ')
}

export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
