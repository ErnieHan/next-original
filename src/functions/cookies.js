function setCookie(name, data) {
  document.cookie = name.toString() + '=' + data + ';path=/'
  return
}

function getCookie(name) {
  var value = '; ' + document.cookie
  var parts = value.split('; ' + name + '=')
  if (parts.length === 2) {
    return parts.pop().split(';').shift()
  }
}

function deleteCookie(name, path, domain) {
    document.cookie =
      name +
      "=" +
      (path ? ";path=" + path : "") +
      (domain ? ";domain=" + domain : "") +
      ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }

export { setCookie, getCookie, deleteCookie }
