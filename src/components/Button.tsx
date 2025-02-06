import React from 'react';

interface PropsI {
  name: string;
  
}

class Button extends React.Component<PropsI> {
  render() {
    return <button>{this.props.name}</button>;
  }
}
export default Button;
