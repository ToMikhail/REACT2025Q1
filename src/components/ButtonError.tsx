import React from 'react';

interface Props {
  name: string;
  type: string;
  onClick?: () => void;
}

interface State {
  hasError: boolean;
}

class Button extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (): void => {
    this.setState({ hasError: true });
  };
  render() {
    if (this.state.hasError) {
      throw new Error('Expected error');
    }
    return <button onClick={this.handleClick}>{this.props.name}</button>;
  }
}
export default Button;
