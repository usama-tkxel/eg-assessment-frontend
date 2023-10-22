import React, { Component } from 'react';

import ErrorPage from 'src/pages/error-page';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    const { fallback = '', useDefault, children } = this.props;
    return this.state.hasError ? <ErrorPage /> : children;
  }
}

export default ErrorBoundary;
