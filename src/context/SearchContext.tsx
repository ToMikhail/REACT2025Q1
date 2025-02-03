import React from 'react';
import { ReactNode, createContext } from 'react';

interface SearchContextI {
  searchQuery: string;
  updateSearch: (query: string) => void;
}

//Create context
const SearchContext = createContext<SearchContextI | undefined>(undefined);

//Create Provider Component
class SearchProvider extends React.Component<
  { children: ReactNode },
  { searchQuery: string }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { searchQuery: '' };
  }

  updateSearch = (query: string) => {
    this.setState({ searchQuery: query });
  };
  render() {
    return (
      <SearchContext.Provider
        value={{
          searchQuery: this.state.searchQuery,
          updateSearch: this.updateSearch,
        }}
      >
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}

export { SearchContext, SearchProvider };
