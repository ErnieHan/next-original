import React, { useEffect } from 'react'

export default function Checking() {
  useEffect(() => {
    const json = {
      information: {},
      options: [],
      isDiy: true,
      price: 2000
    }
    const rules = [
      { key: 'information', type: 'object' },
      { key: 'options', type: 'array' },
      { key: 'isDiy', type: 'boolean' },
      { key: 'price', type: 'number' }
    ]
    const url = '/shopping/v1/personalization/solitaire/diamonds/search'
    rules.forEach(rule => {
      const key = rule.key
      const value = json[rule.key]
      const type = rule.type
      handleCheck(key, value, type, url)
    })
  }, [])

  function handleCheck(key, value, type, url) {
    try {
      function hasError() {
        throw new Error(`"${key}" type should be ${type} in ${url}`)
      }

      if (type === 'object') {
        const isObject = value instanceof Object
        const isArray = value instanceof Array
        if (!isObject || isArray) {
          hasError()
        }
      } else if (type === 'array') {
        const isArray = value instanceof Array
        if (!isArray) {
          hasError()
        }
      } else if (type === 'string') {
        const isString = typeof value === 'string'
        if (!isString) {
          hasError()
        }
      } else if (type === 'boolean') {
        const isBoolean = typeof value === 'boolean'
        if (!isBoolean) {
          hasError()
        }
      } else if (type === 'number') {
        const isNumber = typeof value === 'number'
        if (!isNumber) {
          hasError()
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  return <div>this is checking</div>
}
