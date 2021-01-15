import React, { Component } from 'react'
import Ernie from '../src/components/Ernie'
import ErrorBoundary from '../src/components/ErrorBoundary'

class Catch extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Ernie />
        </ErrorBoundary>
      </div>
    )
  }
}

export default Catch
