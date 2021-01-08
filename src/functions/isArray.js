const isArray = array => {
  let bool = false
  if (array && Array.isArray(array) && array.length > 0) {
    bool = true
  }
  return bool
}

export default isArray
