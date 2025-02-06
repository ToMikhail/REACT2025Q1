import { Component, ChangeEvent, FormEvent, ContextType, Context } from 'react';
import Button from './Button';
import { SearchContext, SearchContextI } from '../context/SearchContext';

interface SearchInputState {
  query: string;
}

class SearchInput extends Component<unknown, SearchInputState> {
  static contextType: Context<SearchContextI | undefined> = SearchContext;
  declare context: ContextType<typeof SearchContext>;

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

  // // Handle input change
  // handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   this.setState({ query: event.target.value });
  // };

  // Handle form submission
  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.context?.updateSearch(this.state.query);
    console.log('submit:', this.state.query);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          style={{ margin: '1rem' }}
          type="text"
          placeholder="Search..."
          value={this.state.query}
          onChange={this.handleChange}
        />
        <Button type="submit" name="Search" />
        <pre>{this.state.query}</pre>
      </form>
    );
  }
}

export default SearchInput;
