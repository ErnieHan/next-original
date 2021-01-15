import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    // display fallback UI
    this.setState({ hasError: true })
    // you can also log the error to an error reporting service
    console.error(error, info)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    return <div>{hasError ? 'has error' : children}</div>
  }
}

export default ErrorBoundary
