import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // this.setState({
    //   hasError: true,
    //   errorMessage: error.message,
    // });
    console.error('Error Boundary Caught an Error:', error, errorInfo);
  }

  render() {
    console.log('ErrorBoundary works');
    if (this.state.hasError) {
      console.log('ErrorBoundary error');
      return (
        <div
          style={{
            padding: '20px',
            border: '1px solid "darkgrey"',
            background: 'grey',
          }}
        >
          <h2>Something went wrong!</h2>
          <p>{this.state.errorMessage}</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
