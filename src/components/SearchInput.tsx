import { Component, ChangeEvent, FormEvent } from 'react';
import Button from './Button';

interface SearchInputState {
  query: string;
}

class SearchInput extends Component<unknown, SearchInputState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      query: '',
    };
  }

  // Handle input change
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  // Handle form submission
  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert(`Searching for: ${this.state.query}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={this.state.query}
          onChange={this.handleChange}
        />
        <Button type="submit" name="Search" />
      </form>
    );
  }
}

export default SearchInput;
