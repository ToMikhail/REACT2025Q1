import React, { ContextType } from 'react';
import { SearchContext } from '../context/SearchContext';

interface Response {
  count: number;
  next: string;
  previous: null;
  results: User[];
}
interface User {
  name: string;
  url: string;
}

interface State {
  users: User[];
  loading: boolean;
  error: string | null;
}

class Results extends React.Component<unknown, State> {
  static contextType = SearchContext;
  declare context: ContextType<typeof SearchContext>;

  constructor(props: unknown) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data: Response) => {
        console.log(data);
        this.setState({ users: data.results, loading: false });
      })

      .catch((error) =>
        this.setState({ error: error.message, loading: false })
      );
  }

  render() {
    const { users, loading, error } = this.state;
    const searchQuery: string = this.context?.searchQuery || '';
    console.log('searchQuery: ', searchQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (searchQuery) {
      const user: undefined | User = users.find(
        (user: User): undefined | boolean => user.name === searchQuery.trim()
      );
      if (user) return <p>{user.name}</p>;
      else return <p>User not found.</p>;
    }

    return (
      <div>
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.name}>
              {user.name} - {user.url}
            </li>
          ))}
        </ul>
        <pre>{searchQuery}</pre>
      </div>
    );
  }
}

export default Results;
