import React from 'react';

interface Props {
  name: string;
  type: string;
  onClick?: () => void;
  // disabled?: boolean;
  // className?: string;
  // children?: React.ReactNode;
  // style?: React.CSSProperties;
  // [key: string]: any; // for additional props
}

// interface State {}

// class Button extends React.Component<Props, State> {
class Button extends React.Component<Props> {
  render() {
    return <button>{this.props.name}</button>;
  }
}
export default Button;
